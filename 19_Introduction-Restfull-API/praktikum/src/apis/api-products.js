import { AxiosError } from "axios";
import { AxiosInstance } from "../configs/axios-instance";

export const APIProducts = {
	getProducts: async () => {
		try {
			const result = await AxiosInstance.get("/products");
			return result.data;
		} catch (err) {
			if (err instanceof AxiosError && err.response && err.response.data) {
				throw new Error(err.response.data.message || "An error occurred.");
			} else {
				throw new Error("An error occurred.");
			}
		}
	},
	deleteProduct: async (id) => {
		try {
			const result = await AxiosInstance.delete(`/products/${id}`);
			return result.data;
		} catch (err) {
			if (err instanceof AxiosError && err.response && err.response.data) {
				throw new Error(err.response.data.message || "An error occurred.");
			} else {
				throw new Error("An error occurred.");
			}
		}
	},
};
