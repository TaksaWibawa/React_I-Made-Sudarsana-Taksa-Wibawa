function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-auto">
        <a href="#" className="text-dark text-decoration-none fs-3 fw-bold">
          Simple Header
        </a>
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
          <ul className="navbar-nav ms-auto nav-pills">
            <li className="nav-item m-1">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="#">
                Features
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
