import roundedLogo from "../assets/SIC Rounded Logo.png";

function WelcomeSection() {
	return (
		<div className="container-fluid d-flex justify-content-center align-items-center py-5 content">
			<div className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-8 col-md-10">
						<div className="col-lg-8 d-flex flex-column gap-2">
							<h1 className="fw-bolder text-center text-lg-start">
								Achieve Success Through Development of Intellectual Insight and
								Self-Capability
							</h1>
							<p className="w-100 text-center text-lg-start">
								Innovating a connected future through developer studies.
								Empowering society through self-ability. We are here to apply
								our capabilities in the field of information and communication
								technology to create professionalism and integrity to present a
								future that is rich of knowledge.
							</p>
							<div className="d-flex justify-content-center justify-content-lg-start">
								<a href="#">
									<button className="btn btn-outline-primary px-3">
										Explore
									</button>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-2 d-lg-block d-none">
						<img
							src={roundedLogo}
							alt="SIC LOGO HERO"
							className="w-75 d-block"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeSection;
