import { accountListReducer } from "./account/account-list";
import { configureStore } from "@reduxjs/toolkit";
import { currentAccountReducer } from "./account/current-account";
import { deleteProductReducer } from "./products/delete-product";
import { getProductsReducer } from "./products/get-products";

const store = configureStore({
	reducer: {
		accountList: accountListReducer,
		currentAccount: currentAccountReducer,

		getProducts: getProductsReducer,
	},
});

export default store;
