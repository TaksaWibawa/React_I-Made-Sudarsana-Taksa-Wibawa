import { createSlice } from "@reduxjs/toolkit";

const initialUserAccount = {
	firstName: "admin",
	lastName: "admin",
	username: "admin",
	email: "admin@gmail.com",
	password: "admin123",
};

const accountListSlice = createSlice({
	name: "accountList",
	initialState: [initialUserAccount],
	reducers: {
		addAccountToAccountList: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addAccountToAccountList } = accountListSlice.actions;
export const accountListReducer = accountListSlice.reducer;
export const selectAccountList = (state) => state.accountList;
