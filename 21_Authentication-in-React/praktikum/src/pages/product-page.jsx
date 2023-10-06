import { addProduct } from "../store/products/add-product";
import { fetchProducts } from "../store/products/get-products";
import { ProductList } from "../components/product-list";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import {
	FileInput,
	NumberInput,
	RadioInput,
	SelectInput,
	TextAreaInput,
	TextInput,
} from "../components/form-components";

function ProductForm() {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			id: "",
			name: "",
			category: "",
			freshness: "",
			price: "",
			image: null,
			description: "",
		},
	});

	const onSubmit = (data) => {
		data.id = uuidv4().slice(0, 4);
		if (data.image) {
			data.image = URL.createObjectURL(data.image);
		}
		try {
			dispatch(addProduct(data))
				.then(() => {
					alert("Product has been added!");
					dispatch(fetchProducts());
					reset();
				})
				.catch((error) => {
					console.error("Add product error: ", error);
				});
		} catch (error) {
			alert("Failed to add product!");
		}
	};

	const validateFreshness = (value) => {
		return !!value || "Product freshness is required";
	};

	return (
		<>
			<section className="row justify-content-center">
				<div className="col-6 mt-5 px-0">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h3 className="mb-4">Detail Product</h3>
						<div className="row g-3 mb-4">
							<div className="col-8">
								<TextInput
									label="Product name"
									name="name"
									control={control}
									rules={{
										required: "Product name is required",
										maxLength: {
											value: 25,
											message: "Product name must be less than 25 characters",
										},
										pattern: {
											value: /^[A-Za-z\s]+$/,
											message:
												"Product name must not contain special characters",
										},
									}}
									errors={errors}
								/>
							</div>
							<div className="col-4">
								<SelectInput
									label="Product category"
									name="category"
									control={control}
									rules={{ required: "Product category is required" }}
									errors={errors}
									options={["Choose Category", "Laptop", "Phone", "Keyboard"]}
								/>
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-8">
								<FileInput
									label="Product Image"
									name="image"
									control={control}
									rules={{ required: "Product image is required" }}
									errors={errors}
								/>
							</div>
							<div className="col-4">
								<RadioInput
									label="Product Freshness"
									name="freshness"
									control={control}
									rules={{
										validate: validateFreshness,
									}}
									errors={errors}
									options={["Brand New", "Second Hand", "Refurbished"]}
								/>
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-12">
								<TextAreaInput
									label="Product Description"
									name="description"
									control={control}
									rules={{ required: "Product description is required" }}
									errors={errors}
								/>
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-12">
								<NumberInput
									label="Product Price"
									name="price"
									control={control}
									rules={{
										required: "Product price is required",
										pattern: {
											value: /^[1-9][0-9]*$/,
											message: "Invalid price format",
										},
									}}
									errors={errors}
								/>
							</div>
						</div>
						<div className="row g-3 mb-4 mt-5">
							<div className="col-12 pe-0 d-flex justify-content-center">
								<button
									id="submitButton"
									name="submitButton"
									role="button"
									type="submit"
									className="btn btn-primary w-50"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
			<ProductList />
		</>
	);
}

export default ProductForm;
