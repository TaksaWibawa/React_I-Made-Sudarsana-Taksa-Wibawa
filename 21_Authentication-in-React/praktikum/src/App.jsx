import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { setLoggedInAccount } from "./store/account/current-account";
import { useDispatch } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./pages/landing-page";
import Login from "./pages/login-page";
import Navbar from "./components/navbar";
import PrivateRoute from "./routes/private-route";
import ProductDetail from "./pages/product-detail-page";
import ProductForm from "./pages/product-page";
import ProtectedRoute from "./routes/protected-route";
import RegistrationForm from "./pages/registration-page";
import Authentication from "./utils/auth";
import { useEffect } from "react";

export default function App() {
	const dispatch = useDispatch();
	const auth = new Authentication();

	// try to use redux persist next time!
	useEffect(() => {
		if (auth.isUserAuthenticated()) {
			dispatch(setLoggedInAccount(auth.getCookies()));
		} else {
			dispatch(setLoggedInAccount(null));
		}
	}, [dispatch, auth]);

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
