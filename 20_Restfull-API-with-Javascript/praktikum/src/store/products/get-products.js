import { APIProducts } from "../../apis/api-products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	APIProducts.getProducts
);

const initialState = {
	status: "idle",
	message: null,
	data: [],
};

const getProductsSlice = createSlice({
	name: "getProducts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "pending";
				state.message = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.data = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.message = action.error.stack;
			});
	},
});

export const selectProducts = (state) => state.getProducts;
export const getProductsReducer = getProductsSlice.reducer;
