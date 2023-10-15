import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInAccount } from "./store/account/current-account";

import LandingPage from "./pages/landing-page";
import ProductForm from "./pages/product-page";
import ProductDetail from "./pages/product-detail-page";
import Login from "./pages/login-page";
import RegistrationForm from "./pages/registration-page";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

import PrivateRoute from "./routes/private-route";
import ProtectedRoute from "./routes/protected-route";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

export default function App() {
	const dispatch = useDispatch();
	const storedUserAccount = JSON.parse(localStorage.getItem("loggedInAccount"));

	if (storedUserAccount) {
		dispatch(setLoggedInAccount(storedUserAccount));
	}

	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<PrivateRoute />}
				>
					<Route
						path="/"
						element={<LandingPage />}
					/>
					<Route
						path="/product"
						element={
							<>
								<Header />
								<ProductForm />
							</>
						}
					/>
					<Route
						path="/product/:productId"
						element={<ProductDetail />}
					/>
				</Route>
				<Route
					path="/"
					element={<ProtectedRoute />}
				>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<RegistrationForm />}
					/>
				</Route>
				<Route
					path="*"
					element={<h1 className="text-center my-5 fw-bold">404 Not Found</h1>}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
