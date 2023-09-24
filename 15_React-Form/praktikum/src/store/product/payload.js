import { createSlice } from '@reduxjs/toolkit';

const productPayloadSlice = createSlice({
    name: 'payload',
    initialState: [],
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
            const { id, updatedProduct } = action.payload;
            const index = state.findIndex((item) => item.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedProduct };
            }
        }
    }
});

export const { setPayload, addProductToPayload, removeProductFromPayload, updateProductInPayload } = productPayloadSlice.actions;
export default productPayloadSlice.reducer;