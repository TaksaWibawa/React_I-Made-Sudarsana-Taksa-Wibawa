import { AxiosError } from "axios";
import { AxiosInstance } from "../configs/axios-instance";

export const APIProducts = {
	getProducts: async () => {
		try {
			const result = await AxiosInstance.get("/products");
			return result.data;
		} catch (err) {
			throw new Error(AxiosError.response.data.message || "An error occurred.");
		}
	},

	addProduct: async (data) => {
		try {
			console.log(data);
			const result = await AxiosInstance.post("/products", data);
			return result.data;
		} catch (err) {
			throw new Error(AxiosError.response.data.message || "An error occurred.");
		}
	},

	deleteProduct: async (id) => {
		try {
			const result = await AxiosInstance.delete(`/products/${id}`);
			return result.data;
		} catch (err) {
			throw new Error(AxiosError.response.data.message || "An error occurred.");
		}
	},

	updateProduct: async (updatedProduct) => {
		try {
			const { id } = updatedProduct;
			const result = await AxiosInstance.put(`/products/${id}`, updatedProduct);
			return result.data;
		} catch (err) {
			throw new Error(AxiosError.response.data.message || "An error occurred.");
		}
	},
};
