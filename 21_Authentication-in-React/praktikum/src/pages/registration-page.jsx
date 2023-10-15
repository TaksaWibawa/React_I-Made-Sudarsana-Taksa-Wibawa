import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAccountToAccountList } from "../store/account/account-list";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data) => {
		alert("Registration successful!");
		dispatch(addAccountToAccountList(data));
		navigate("/login");
	};

	const password = watch("password");

	return (
		<div className="row justify-content-center">
			<div className="col-6 mt-5 px-0">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h3 className="mb-4 text-center fw-bold">Registration Form</h3>
					<div className="mb-3">
						<label
							htmlFor="firstName"
							className="form-label"
						>
							First Name
						</label>
						<Controller
							name="firstName"
							control={control}
							rules={{
								required: "First name is required",
								minLength: {
									value: 3,
									message: "First name must be at least 3 characters",
								},
							}}
							render={({ field }) => (
								<input
									type="text"
									className={`form-control ${
										errors.firstName ? "is-invalid" : ""
									}`}
									{...field}
								/>
							)}
						/>
						{errors.firstName && (
							<div className="invalid-feedback">{errors.firstName.message}</div>
						)}
					</div>
					<div className="mb-3">
						<label
							htmlFor="lastName"
							className="form-label"
						>
							Last Name
						</label>
						<Controller
							name="lastName"
							control={control}
							rules={{
								required: "Last name is required",
								minLength: {
									value: 3,
									message: "Last name must be at least 3 characters",
								},
							}}
							render={({ field }) => (
								<input
									type="text"
									className={`form-control ${
										errors.lastName ? "is-invalid" : ""
									}`}
									{...field}
								/>
							)}
						/>
						{errors.lastName && (
							<div className="invalid-feedback">{errors.lastName.message}</div>
						)}
					</div>
					<div className="mb-3">
						<label
							htmlFor="username"
							className="form-label"
						>
							Username
						</label>
						<Controller
							name="username"
							control={control}
							rules={{
								required: "Username is required",
								minLength: {
									value: 3,
									message: "Username must be at least 3 characters",
								},
							}}
							render={({ field }) => (
								<input
									type="text"
									className={`form-control ${
										errors.username ? "is-invalid" : ""
									}`}
									{...field}
								/>
							)}
						/>
						{errors.username && (
							<div className="invalid-feedback">{errors.username.message}</div>
						)}
					</div>
					<div className="mb-3">
						<label
							htmlFor="email"
							className="form-label"
						>
							Email
						</label>
						<Controller
							name="email"
							control={control}
							rules={{
								required: "Email is required",
								pattern: {
									value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
									message: "Invalid email address",
								},
							}}
							render={({ field }) => (
								<input
									type="text"
									className={`form-control ${errors.email ? "is-invalid" : ""}`}
									{...field}
								/>
							)}
						/>
						{errors.email && (
							<div className="invalid-feedback">{errors.email.message}</div>
						)}
					</div>
					<div className="mb-3">
						<label
							htmlFor="password"
							className="form-label"
						>
							Password
						</label>
						<Controller
							name="password"
							control={control}
							rules={{
								required: "Password is required",
								minLength: {
									value: 8,
									message: "Password must be at least 8 characters",
								},
							}}
							render={({ field }) => (
								<input
									type="password"
									className={`form-control ${
										errors.password ? "is-invalid" : ""
									}`}
									{...field}
								/>
							)}
						/>
						{errors.password && (
							<div className="invalid-feedback">{errors.password.message}</div>
						)}
					</div>
					<div className="mb-3">
						<label
							htmlFor="confirmPassword"
							className="form-label"
						>
							Confirm Password
						</label>
						<Controller
							name="confirmPassword"
							control={control}
							rules={{
								required: "Please confirm your password",
								validate: (value) =>
									value === password || "Passwords do not match",
							}}
							render={({ field }) => (
								<input
									type="password"
									className={`form-control ${
										errors.confirmPassword ? "is-invalid" : ""
									}`}
									{...field}
								/>
							)}
						/>
						{errors.confirmPassword && (
							<div className="invalid-feedback">
								{errors.confirmPassword.message}
							</div>
						)}
					</div>
					<div className="my-3">
						<button
							className="btn btn-primary"
							type="submit"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegistrationForm;
