import { Navigate, Outlet } from "react-router-dom";
import Authentication from "../utils/auth";

function ProtectedRoute() {
	const auth = new Authentication();
	if (auth.isUserAuthenticated()) {
		return <Navigate to="/" />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
