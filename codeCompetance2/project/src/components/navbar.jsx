import logo from "../assets/sic-logo.svg";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-fixed-top navbar-light bg-white border-bottom">
			<div className="container">
				<a
					className="navbar-brand"
					href="#"
				>
					<img
						src={logo}
						width={100}
						height={70}
						alt="logo sic unud"
						className="p-0"
					/>
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarNav"
				>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a
								className="nav-link fw-semibold"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link fw-semibold"
								href="#"
							>
								Divisions
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link fw-semibold"
								href="#"
							>
								Clubs
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link fw-semibold"
								href="#"
							>
								FAQ
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
