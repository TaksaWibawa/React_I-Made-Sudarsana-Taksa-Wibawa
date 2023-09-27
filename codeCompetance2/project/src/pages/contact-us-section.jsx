/* eslint-disable react/no-unescaped-entities */
import ContactForm from "../components/contact-form";

function ContactUsSection() {
	return (
		<section className="contact-us">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-lg-start text-center">
						<div className="contact-title mb-3">
							<h1 className="fw-bolder">Contact Us</h1>
							<p className="w-lg-75 mx-4 mx-lg-auto">
								If you have any questions or inquiries, feel free to reach out
								to us using the form below. We'll get back to you as soon as
								possible.
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="contact-form">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUsSection;
