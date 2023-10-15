import { ProductList } from "../components/product-list";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

function ProductForm() {
	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			id: "",
			name: "",
			category: "",
			freshness: "",
			price: "",
			image: "",
			description: "",
		},
	});

	const onSubmit = (data) => {
		data.id = uuidv4();
	};

	const validateFreshness = (value) => {
		return !!value || "Product freshness is required";
	};

	return (
		<>
			<section className="row justify-content-center">
				<div className="col-6 mt-5 px-0">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h3 className="mb-4">Detail Product</h3>
						<div className="row g-3 mb-4">
							<div className="col-8">
								<label
									htmlFor="name"
									className="form-label"
								>
									Product name
								</label>
								<Controller
									name="name"
									control={control}
									rules={{
										required: "Product name is required",
										maxLength: {
											value: 25,
											message: "Product name must be less than 25 characters",
										},
										pattern: {
											value: /^[A-Za-z\s]+$/,
											message:
												"Product name must not contain special characters",
										},
									}}
									render={({ field }) => (
										<input
											id="name"
											name="name"
											role="input"
											type="text"
											className={`form-control input ${
												errors.name ? "is-invalid" : ""
											}`}
											{...field}
										/>
									)}
								/>
								{errors.name && (
									<div className="invalid-feedback">{errors.name.message}</div>
								)}
							</div>
							<div className="col-4">
								<label
									htmlFor="category"
									className="form-label"
								>
									Product category
								</label>
								<Controller
									name="category"
									control={control}
									rules={{ required: "Product category is required" }}
									render={({ field }) => (
										<select
											id="category"
											name="category"
											role="combobox"
											className={`form-select input ${
												errors.category ? "is-invalid" : ""
											}`}
											{...field}
										>
											<option value="">Choose...</option>
											<option>Category 1</option>
											<option>Category 2</option>
											<option>Category 3</option>
										</select>
									)}
								/>
								{errors.category && (
									<div
										role=""
										className="invalid-feedback"
									>
										{errors.category.message}
									</div>
								)}
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-8">
								<label
									htmlFor="image"
									className="form-label"
								>
									Product Image
								</label>
								<Controller
									name="image"
									control={control}
									rules={{ required: "Product image is required" }}
									render={({ field }) => (
										<input
											id="image"
											type="file"
											role="input"
											className={`form-control input image ${
												errors.image ? "is-invalid" : ""
											}`}
											accept="image/*"
											onChange={(e) => {
												const file = e.target.files[0];
												if (file) {
													const reader = new FileReader();
													reader.onloadend = () => {
														field.onChange(reader.result);
													};
													reader.readAsDataURL(file);
												}
											}}
										/>
									)}
								/>
								{errors.image && (
									<div className="invalid-feedback">{errors.image.message}</div>
								)}
							</div>
							<div className="col-4">
								<label
									htmlFor="freshness"
									className="form-label"
								>
									Product Freshness
								</label>
								<Controller
									name="freshness"
									control={control}
									rules={{
										validate: validateFreshness,
									}}
									render={({ field }) => (
										<div className="radio-group">
											<div className="form-check form-check-inline">
												<input
													id="freshness-brand-new"
													name="freshness"
													role="radio"
													type="radio"
													value="Brand New"
													className="form-check-input"
													onChange={(e) => field.onChange(e.target.value)}
													checked={field.value === "Brand New"}
												/>
												<label
													htmlFor="freshness-brand-new"
													className="form-check-label"
												>
													Brand New
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													id="freshness-second-hand"
													name="freshness"
													role="radio"
													type="radio"
													value="Second Hand"
													className="form-check-input"
													onChange={(e) => field.onChange(e.target.value)}
													checked={field.value === "Second Hand"}
												/>
												<label
													htmlFor="freshness-second-hand"
													className="form-check-label"
												>
													Second Hand
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													id="freshness-refurbished"
													name="freshness"
													role="radio"
													type="radio"
													value="Refurbished"
													className="form-check-input"
													onChange={(e) => field.onChange(e.target.value)}
													checked={field.value === "Refurbished"}
												/>
												<label
													htmlFor="freshness-refurbished"
													className="form-check-label"
												>
													Refurbished
												</label>
											</div>
										</div>
									)}
								/>
								{errors.freshness && (
									<div className="invalid-feedback d-block !important">
										{errors.freshness.message}
									</div>
								)}
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-12">
								<label
									htmlFor="description"
									className="form-label"
								>
									Product Description
								</label>
								<Controller
									name="description"
									control={control}
									rules={{ required: "Product description is required" }}
									render={({ field }) => (
										<textarea
											id="description"
											name="description"
											role="textbox"
											className={`form-control ${
												errors.description ? "is-invalid" : ""
											}`}
											rows={7}
											{...field}
										/>
									)}
								/>
								{errors.description && (
									<div className="invalid-feedback">
										{errors.description.message}
									</div>
								)}
							</div>
						</div>
						<div className="row g-3 mb-4">
							<div className="col-12">
								<label
									htmlFor="price"
									className="form-label"
								>
									{" "}
									Product Price{" "}
								</label>
								<Controller
									name="price"
									control={control}
									rules={{
										required: "Product price is required",
										pattern: {
											value: /^[1-9][0-9]*$/,
											message: "Invalid price format",
										},
									}}
									render={({ field }) => (
										<input
											id="price"
											name="price"
											role="input"
											type="number"
											className={`form-control input ${
												errors.price ? "is-invalid" : ""
											}`}
											placeholder="$ 1"
											{...field}
										/>
									)}
								/>
								{errors.price && (
									<div className="invalid-feedback">{errors.price.message}</div>
								)}
							</div>
						</div>
						<div className="row g-3 mb-4 mt-5">
							<div className="col-12 pe-0 d-flex justify-content-center">
								<button
									id="submitButton"
									name="submitButton"
									role="button"
									type="submit"
									className="btn btn-primary w-50"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
			<ProductList />
		</>
	);
}

export default ProductForm;
