import { accountListReducer } from "./account/account-list";
import { addProductReducer } from "./products/add-product";
import { configureStore } from "@reduxjs/toolkit";
import { currentAccountReducer } from "./account/current-account";
import { deleteProductReducer } from "./products/delete-product";
import { getProductsReducer } from "./products/get-products";
import { updateProductReducer } from "./products/update-product";

const store = configureStore({
	reducer: {
		accountList: accountListReducer,
		currentAccount: currentAccountReducer,

		addProduct: addProductReducer,
		deleteProduct: deleteProductReducer,
		getProducts: getProductsReducer,
		updateProduct: updateProductReducer,
	},
});

export default store;
