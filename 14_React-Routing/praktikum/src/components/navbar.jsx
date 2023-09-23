import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!Cookies.get("username") && !!Cookies.get("password");

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("password");
    alert("Logout berhasil!");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-auto">
        <NavLink to="/" className="text-dark text-decoration-none fs-3 fw-bold">
          Simple Header
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto nav-pills flex gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={`nav-link fw-semibold ${
                  location.pathname === "/" ? "text-white" : "text-primary"
                }`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                className={`nav-link fw-semibold ${
                  location.pathname.startsWith("/product") ? "text-white" : "text-primary"
                }`}
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/account"
                className={`nav-link fw-semibold ${
                  location.pathname === "/account" ? "text-white" : "text-primary"
                }`}
              >
                Account
              </NavLink>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="nav-link btn bg-danger fw-semibold text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
