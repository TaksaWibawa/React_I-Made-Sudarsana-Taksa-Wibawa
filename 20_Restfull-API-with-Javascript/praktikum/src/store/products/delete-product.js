import { APIProducts } from "../../apis/api-products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteProduct = createAsyncThunk(
	"products/deleteProduct",
	APIProducts.deleteProduct
);

const initialState = {
	status: "idle",
	message: null,
	data: [],
};

const deleteProductSlice = createSlice({
	name: "deleteProduct",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(deleteProduct.pending, (state) => {
				state.status = "pending";
				state.message = "Pending";
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.message = "Success";
				state.data = action.payload;
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.status = "failed";
				state.message = action.error.stack;
			});
	},
});

export const deleteProductReducer = deleteProductSlice.reducer;
