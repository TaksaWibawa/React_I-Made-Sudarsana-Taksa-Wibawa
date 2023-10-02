import whiteLogo from "../assets/sic-logo-white.svg";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import qrCode from "../assets/qr-code.svg";

function Footer() {
	return (
		<footer className="container-fluid py-5">
			<div className="container">
				<div className="row border-bottom pb-5 align-items-end">
					<div className="col-lg-5 pb-5 pb-lg-0">
						<div className="col-lg-8 text-start">
							<img
								src={whiteLogo}
								alt="Logo Sic Footer"
								className="pb-4"
							/>
							<p className="text-white">
								A non-profit organization committed to finding the best way to
								share knowledge about technology.
							</p>
							<div className="d-flex justify-content-start align-items-center gap-3">
								<a
									href="https://www.instagram.com/sic.unud/"
									target="_blank"
									rel="noreferrer"
									className="text-white fs-4"
								>
									<img
										src={instagram}
										alt="Instagram Sic"
									/>
								</a>
								<a
									href="https://github.com/sic-unud"
									target="_blank"
									rel="noreferrer"
									className="text-white fs-4"
								>
									<img
										src={github}
										alt="Github Sic"
									/>
								</a>
								<a
									href="https://www.linkedin.com/company/student-innovation-centre/"
									target="_blank"
									rel="noreferrer"
									className="text-white fs-4"
								>
									<img
										src={linkedin}
										alt="Linkedin Sic"
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							<div className="col-lg-5 col-md-6 pb-5 pb-lg-0 text-start">
								<h4 className="fw-bold text-white pb-2">Contact Us</h4>
								<div className="col-lg-10 d-flex align-items-center gap-2 text-white pb-2">
									+62 123-456-789 (Taksa)
								</div>
								<div className="col-lg-10 d-flex align-items-center gap-2 text-white pb-2">
									sic.udayana@gmail.com
								</div>
								<div className="col-lg-10 d-flex align-items-start gap-2 text-white pb-2">
									Sekretariat SIC. Gedung BD Lt. 2, Informatika FMIPA Udayana
								</div>
							</div>
							<div className="col-lg-5 col-md-6 pb-5 pb-lg-0 text-start">
								<div className="col-lg-10">
									<h4 className="fw-bold text-white pb-2">Random Quote</h4>
									<i>
										<q className="text-white">
											The technology of today is the result of the imagination
											of yesterday.
										</q>
									</i>
									<p className="pt-4 text-white">- Carl Saganv</p>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 pb-5 pb-lg-0 text-start">
								<h4 className="fw-bold text-white pb-2">Join Us</h4>
								<div className="col-lg-12 col-md-5 col-5 m-lg-auto m-0">
									<img
										src={qrCode}
										alt="QR CODE DISCORD"
										className="w-100"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p className="text-center text-white mt-4">
					© Student Innovation Centre All Rights Reserved. Website by SIC 2023.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
