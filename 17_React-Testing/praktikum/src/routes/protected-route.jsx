import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(){
    const isAuthenticated = !!Cookies.get("username") && !!Cookies.get("password");

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}

export default ProtectedRoute;