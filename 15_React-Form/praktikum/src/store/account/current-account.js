import { createSlice } from '@reduxjs/toolkit';

const initialCurrentAccount = null;

const currentAccountSlice = createSlice({
    name: 'currentAccount',
    initialState: initialCurrentAccount,
    reducers: {
        setLoggedInAccount: (state, action) => {
            const accountToSet = action.payload;

            if (accountToSet) {
                localStorage.setItem('loggedInAccount', JSON.stringify(accountToSet));
                return accountToSet;
            }

            return null;
        },
        logoutCurrentAccount: () => {
            localStorage.removeItem('loggedInAccount');
            return null;
        }
    }
});

export const { setLoggedInAccount, logoutCurrentAccount } = currentAccountSlice.actions;
export default currentAccountSlice.reducer;
