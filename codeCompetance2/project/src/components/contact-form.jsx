import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ContactModal from "./contact-us-modal";

function ContactForm() {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm();
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({});

	const onSubmit = (data) => {
		setFormData(data);
		setShowModal(true);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label
						htmlFor="name"
						className="form-label"
					>
						Your Name
					</label>
					<Controller
						name="name"
						control={control}
						defaultValue=""
						rules={{ required: "Name is required" }}
						render={({ field }) => (
							<div>
								<input
									{...field}
									type="text"
									className={`form-control ${errors.name ? "is-invalid" : ""}`}
									placeholder="Enter your name"
								/>
								{errors.name && (
									<div className="invalid-feedback">{errors.name.message}</div>
								)}
							</div>
						)}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="email"
						className="form-label"
					>
						Your Email
					</label>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						rules={{
							required: "Email is required",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: "Invalid email format",
							},
						}}
						render={({ field }) => (
							<div>
								<input
									{...field}
									type="email"
									className={`form-control ${errors.email ? "is-invalid" : ""}`}
									placeholder="Enter your email"
								/>
								{errors.email && (
									<div className="invalid-feedback">{errors.email.message}</div>
								)}
							</div>
						)}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="subject"
						className="form-label"
					>
						Subject
					</label>
					<Controller
						name="subject"
						control={control}
						defaultValue=""
						rules={{ required: "Subject is required" }}
						render={({ field }) => (
							<div>
								<input
									{...field}
									type="text"
									className={`form-control ${
										errors.subject ? "is-invalid" : ""
									}`}
									placeholder="Enter the subject"
								/>
								{errors.subject && (
									<div className="invalid-feedback">
										{errors.subject.message}
									</div>
								)}
							</div>
						)}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="message"
						className="form-label"
					>
						Message
					</label>
					<Controller
						name="message"
						control={control}
						defaultValue=""
						rules={{ required: "Message is required" }}
						render={({ field }) => (
							<div>
								<textarea
									{...field}
									className={`form-control ${
										errors.message ? "is-invalid" : ""
									}`}
									rows={4}
									placeholder="What can we help you with?"
								/>
								{errors.message && (
									<div className="invalid-feedback">
										{errors.message.message}
									</div>
								)}
							</div>
						)}
					/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-primary"
					>
						Submit
					</button>
				</div>
			</form>
			<ContactModal
				showModal={showModal}
				closeModal={() => setShowModal(false)}
				formData={formData}
			/>
		</>
	);
}

export default ContactForm;
