import { APIProducts } from "../../apis/api-products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateProduct = createAsyncThunk(
	"products/updateProduct",
	APIProducts.updateProduct
);

const initialState = {
	status: "idle",
	message: null,
	data: [],
};

const updateProductSlice = createSlice({
	name: "updateProduct",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(updateProduct.pending, (state) => {
				state.status = "pending";
				state.message = "Pending";
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.message = "Success";
				state.data = action.payload;
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.status = "failed";
				state.message = action.error.stack;
			});
	},
});

export const updateProductReducer = updateProductSlice.reducer;
