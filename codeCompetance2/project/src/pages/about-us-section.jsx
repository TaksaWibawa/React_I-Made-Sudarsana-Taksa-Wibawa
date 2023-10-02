import illustration from "../assets/what-section.svg";

function AboutUsSection() {
	return (
		<div className="container-fluid py-5">
			<div className="row justify-content-center align-items-center flex-row gap-5">
				<div className="col-lg-4 col-md-6 col-12 text-center d-none d-lg-block">
					<img
						src={illustration}
						alt="SIC LOGO HERO"
						className="w-100"
					/>
				</div>
				<div className="col-lg-4 col-md-10 col-12">
					<div className="d-flex flex-column gap-2 text-center text-lg-start">
						<h1 className="fw-bolder">About Us</h1>
						<p>
							SIC is a community of Informatics students at Udayana University
							that focuses on developing intellectual insight, increasing
							expertise, and personal integrity by collaborating between members
							and communities who have an interest in information and
							communication technology.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUsSection;
