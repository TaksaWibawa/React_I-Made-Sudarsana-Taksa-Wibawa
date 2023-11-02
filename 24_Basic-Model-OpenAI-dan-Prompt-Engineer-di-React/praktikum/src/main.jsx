import { Provider } from "react-redux";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/index.js";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider resetCSS>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);
