import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute() {
  const location = useLocation();

  const isAuthenticated = !!Cookies.get("username") && !!Cookies.get("password");

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}

export default PrivateRoute;
