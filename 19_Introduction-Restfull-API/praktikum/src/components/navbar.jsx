import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCurrentAccount } from "../store/account/current-account";
import Cookies from "js-cookie";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentAccount = useSelector((state) => state.currentAccount);
  const isAuthenticated = !!currentAccount;

  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('password');
    alert('Logout berhasil!');
    dispatch(logoutCurrentAccount());
    navigate('/');
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
                  location.pathname === '/' ? 'text-white' : 'text-primary'
                }`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                className={`nav-link fw-semibold ${
                  location.pathname.startsWith('/product') ? 'text-white' : 'text-primary'
                }`}
              >
                Product
              </NavLink>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  {location.pathname === '/register' ? (
                    <NavLink
                      to="/login"
                      className={`nav-link fw-semibold ${
                        location.pathname === '/login' ? 'text-white' : 'text-white bg-secondary'
                      }`}
                    >
                      Login
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/register"
                      className={`nav-link fw-semibold ${
                        location.pathname === '/register'
                          ? 'text-white'
                          : 'text-white bg-secondary'
                      }`}
                    >
                      Register
                    </NavLink>
                  )}
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link btn bg-danger fw-semibold text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
