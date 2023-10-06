import { fireEvent, render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "@jest/globals";

import ProductPage from "../pages/product-page";
import store from "../store";
import { addProductToPayload } from "../store/product/payload";
import { v4 as uuid } from "uuid";

const file = new File(["(⌐□_□)"], "image.png", {
	type: "image/png",
});

describe("Product Page", () => {
	it("should render product page correctly", () => {
		const { container } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);
		expect(container).toBeInTheDocument();
	});

	it("should render every fields correctly", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const inputs = screen.getAllByRole("input");
		const selectBox = screen.getByRole("combobox");
		const radios = screen.getAllByRole("radio");
		const textarea = screen.getByRole("textbox");
		const submitButton = screen.getByRole("button", { name: /submit/i });

		expect(inputs.length).toEqual(3);
		expect(selectBox).toBeInTheDocument();
		expect(radios.length).toEqual(3);
		expect(textarea).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it("should render every error message on fields when submit button clicked without filling the form", async () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const submitButton = screen.getByRole("button", { name: /submit/i });

		await act(async () => {
			fireEvent.click(submitButton);
		});

		const errorMessages = {
			name: getByText(/product name is required/i),
			category: getByText(/product category is required/i),
			image: getByText(/product image is required/i),
			freshness: getByText(/product freshness is required/i),
			description: getByText(/product description is required/i),
			price: getByText(/product price is required/i),
		};

		Object.values(errorMessages).forEach((message) => {
			expect(message).toBeInTheDocument();
		});
	});

	it("product name field should be able to work correctly", () => {
		const { getByRole } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const productName = getByRole("input", { name: /product name/i });
		fireEvent.change(productName, { target: { value: "Product" } });

		expect(productName.value).toEqual("Product");
	});

	it("should render error message on product name field when defined rules not met", async () => {
		/*
			rules :
			- max length 25 -> "Product name must be less than 25 characters"
			- pattern : only alphabet -> "Product name must not contain special characters"
		*/

		const { getByText, getByRole } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const productName = getByRole("input", { name: /product name/i });

		// max length 25
		await act(async () => {
			fireEvent.change(productName, {
				target: { value: "1234567890123456789012345632131321311" },
			});
		});

		expect(
			getByText(/product name must be less than 25 characters/i)
		).toBeInTheDocument();

		// pattern : only alphabet
		await act(async () => {
			fireEvent.change(productName, { target: { value: "1234567890" } });
		});

		expect(
			getByText(/product name must not contain special characters/i)
		).toBeInTheDocument();
	});

	it("should able to read image file", async () => {
		const { getByRole } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const image = getByRole("input", { name: /product image/i });

		await act(async () => {
			fireEvent.change(image, { target: { files: [file] } });
		});

		expect(image.files[0].type).toEqual("image/png");
		expect(image.files[0].name).toEqual("image.png");
	});

	it("should able to pass product data succesfully to redux store", async () => {
		const { getByRole, getAllByRole } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const productName = getByRole("input", { name: /product name/i });
		const productCategory = getByRole("combobox", {
			name: /product category/i,
		});
		const options = getAllByRole("option");
		const productImage = getByRole("input", { name: /product image/i });
		const productFreshness = getAllByRole("radio");
		const productDescription = getByRole("textbox", {
			name: /product description/i,
		});
		const productPrice = getByRole("input", { name: /product price/i });

		fireEvent.change(productName, { target: { value: "Product" } });
		fireEvent.change(productCategory, {
			target: { value: options[1].value },
		});
		fireEvent.change(productImage, { target: { files: [file] } });
		fireEvent.click(productFreshness[0]);
		fireEvent.change(productDescription, {
			target: { value: "Product 1 description" },
		});
		fireEvent.change(productPrice, {
			target: { value: 10000 },
		});

		await act(async () => {
			store.dispatch({
				type: addProductToPayload.type,
				payload: {
					id: uuid(),
					name: productName.value,
					category: productCategory.value,
					image: productImage.files[0],
					freshness: productFreshness[0].value,
					description: productDescription.value,
					price: productPrice.value,
				},
			});
		});

		expect(store.getState().payload.length).toEqual(2);
	});

	it("product freshness should be able to work correctly", async () => {
		const { getAllByRole } = render(
			<BrowserRouter>
				<Provider store={store}>
					<ProductPage />
				</Provider>
			</BrowserRouter>
		);

		const productFreshness = getAllByRole("radio");

		fireEvent.click(productFreshness[0]);

		expect(productFreshness[0].checked).toEqual(true);
		expect(productFreshness[1].checked).toEqual(false);
		expect(productFreshness[2].checked).toEqual(false);

		fireEvent.click(productFreshness[1]);

		expect(productFreshness[0].checked).toEqual(false);
		expect(productFreshness[1].checked).toEqual(true);
		expect(productFreshness[2].checked).toEqual(false);

		fireEvent.click(productFreshness[2]);

		expect(productFreshness[0].checked).toEqual(false);
		expect(productFreshness[1].checked).toEqual(false);
		expect(productFreshness[2].checked).toEqual(true);
	});
});
