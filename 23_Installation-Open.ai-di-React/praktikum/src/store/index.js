import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./openai/chat";

const store = configureStore({
	reducer: {
		chat: chatReducer,
	},
});

export default store;
