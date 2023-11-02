import { configureStore } from "@reduxjs/toolkit";
import { chatbotReducer } from "./openai/chat";

const store = configureStore({
	reducer: {
		chatbot: chatbotReducer,
	},
});

export default store;
