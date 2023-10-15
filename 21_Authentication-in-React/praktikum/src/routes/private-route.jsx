import { useLocation, Navigate, Outlet } from "react-router-dom";
import Authentication from "../utils/auth";

function PrivateRoute() {
	const auth = new Authentication();
	const location = useLocation();

	if (auth.isUserAuthenticated()) {
		return <Outlet />;
	} else {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
			/>
		);
	}
}

export default PrivateRoute;
