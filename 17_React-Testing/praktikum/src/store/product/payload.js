import { createSlice } from "@reduxjs/toolkit";

const productPayloadSlice = createSlice({
	name: "payload",
	initialState: [
		{
			id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
			name: "John",
			category: "Doe",
			freshness: "Doe",
			price: "Doe",
			image: "Doe",
			description: "Doe",
		},
	],
	reducers: {
		setPayload: (action) => {
			return action.payload;
		},
		addProductToPayload: (state, action) => {
			state.push(action.payload);
		},
		removeProductFromPayload: (state, action) => {
			const productId = action.payload;
			return state.filter((item) => item.id !== productId);
		},
		updateProductInPayload: (state, action) => {
			const { id, updatedProperties } = action.payload;
			const index = state.findIndex((item) => item.id === id);
			if (index !== -1) {
				state[index] = { ...state[index], ...updatedProperties };
			}
		},
	},
});

export const {
	setPayload,
	addProductToPayload,
	removeProductFromPayload,
	updateProductInPayload,
} = productPayloadSlice.actions;
export default productPayloadSlice.reducer;
