import { APIProducts } from "../../apis/api-products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addProduct = createAsyncThunk(
	"products/addProduct",
	APIProducts.addProduct
);

const initialState = {
	status: "idle",
	message: null,
	data: [],
};

const addProductSlice = createSlice({
	name: "addProduct",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(addProduct.pending, (state) => {
				state.status = "pending";
				state.message = null;
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.data = action.payload;
			})
			.addCase(addProduct.rejected, (state, action) => {
				state.status = "failed";
				state.message = action.error.stack;
			});
	},
});

export const addProductReducer = addProductSlice.reducer;
