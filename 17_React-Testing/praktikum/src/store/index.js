import { configureStore } from '@reduxjs/toolkit';
import payloadReducer from './product/payload';
import accountListReducer from './account/account-list';
import currentAccountReducer from './account/current-account';

const store = configureStore({
    reducer: {
        payload: payloadReducer,
        accountList: accountListReducer,
        currentAccount: currentAccountReducer,
    }
});

export default store;