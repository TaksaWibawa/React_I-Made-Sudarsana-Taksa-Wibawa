import { createSlice } from "@reduxjs/toolkit";
import Authentication from "../../utils/auth";

const initialCurrentAccount = null;
const auth = new Authentication();

const currentAccountSlice = createSlice({
	name: "currentAccount",
	initialState: initialCurrentAccount,
	reducers: {
		setLoggedInAccount: (state, action) => {
			const accountToSet = action.payload;

			if (accountToSet) {
				auth.setCookies(accountToSet);
				return accountToSet;
			}
			return null;
		},
		logoutCurrentAccount: () => {
			auth.removeCookies();
			return null;
		},
	},
});

export const { setLoggedInAccount, logoutCurrentAccount } =
	currentAccountSlice.actions;
export const currentAccountReducer = currentAccountSlice.reducer;
