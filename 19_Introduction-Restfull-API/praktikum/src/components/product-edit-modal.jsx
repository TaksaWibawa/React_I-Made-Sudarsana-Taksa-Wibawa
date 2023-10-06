/* eslint-disable react/prop-types */

import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export function ProductEditModal({
	product,
	setProduct,
	showModal,
	setShowModal,
}) {
	const dispatch = useDispatch();

	const {
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm();

	const handleSaveEditsModal = handleSubmit((data) => {
		if (product) {
			setShowModal(false);
			setProduct(null);
		}
	});

	const validateFreshness = (value) => {
		return !!value || "Freshness is required";
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setProduct(null);
		reset();
	};

	return (
		<div
			className={`modal fade ${showModal ? "show" : ""}`}
			style={{
				display: showModal ? "block" : "none",
				backgroundColor: "rgba(0,0,0,0.4)",
				backdropFilter: "blur(5px)",
			}}
			tabIndex="-1"
			role="dialog"
			aria-hidden={!showModal}
			onClick={handleCloseModal}
		>
			<div
				className="modal-dialog modal-dialog-centered modal-lg"
				role="document"
			>
				<div
					className="modal-content"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="modal-header">
						<h5 className="modal-title">Edit Product</h5>
						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={handleCloseModal}
						></button>
					</div>
					<form onSubmit={handleSaveEditsModal}>
						<div className="modal-body">
							<div className="row">
								<div className="col-12">
									<div className="mb-1">
										<label
											htmlFor="id"
											className="form-label"
										>
											Product ID
										</label>
										<input
											type="text"
											className="form-control"
											id="id"
											value={product.id}
											disabled
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="mb-1">
										<label
											htmlFor="name"
											className="form-label"
										>
											Product Name
										</label>
										<Controller
											name="name"
											control={control}
											defaultValue={product.name}
											rules={{
												required: "Product name is required",
												maxLength: {
													value: 25,
													message:
														"Product name must be less than 25 characters",
												},
												pattern: {
													value: /^[A-Za-z\s]+$/,
													message:
														"Product name must not contain special characters",
												},
											}}
											render={({ field }) => (
												<div>
													<input
														type="text"
														className={`form-control ${
															errors.name ? "is-invalid" : ""
														}`}
														id="name"
														{...field}
													/>
													{errors.name && (
														<div className="invalid-feedback">
															{errors.name.message}
														</div>
													)}
												</div>
											)}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="mb-1">
										<label
											htmlFor="category"
											className="form-label"
										>
											Product Category
										</label>
										<Controller
											name="category"
											control={control}
											defaultValue={product.category}
											rules={{ required: "Product category is required" }}
											render={({ field }) => (
												<select
													className={`form-select ${
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
											<div className="invalid-feedback">
												{errors.category.message}
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="mb-1">
										<Controller
											name="image"
											control={control}
											render={({ field }) => (
												<div className="mb-1">
													<label
														htmlFor="image"
														className="form-label"
													>
														Product Image
													</label>
													<input
														type="file"
														className="form-control"
														id="image"
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
												</div>
											)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="mb-1">
										<label
											htmlFor="price"
											className="form-label"
										>
											Product Price
										</label>
										<Controller
											name="price"
											control={control}
											defaultValue={product.price}
											rules={{
												required: "Product price is required",
												pattern: {
													value: /^\d+(\.\d{1,2})?$/,
													message: "Invalid price format",
												},
											}}
											render={({ field }) => (
												<div>
													<input
														type="number"
														className={`form-control ${
															errors.price ? "is-invalid" : ""
														}`}
														id="price"
														{...field}
													/>
													{errors.price && (
														<div className="invalid-feedback">
															{errors.price.message}
														</div>
													)}
												</div>
											)}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="mb-1">
										<label
											htmlFor="freshness"
											className="form-label"
										>
											Product Freshness
										</label>
										<Controller
											name="freshness"
											control={control}
											defaultValue={product.freshness}
											rules={{
												validate: validateFreshness,
											}}
											render={({ field }) => (
												<div className="radio-group">
													<div className="form-check form-check-inline">
														<input
															type="radio"
															id="freshness-brand-new"
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
															type="radio"
															id="freshness-second-hand"
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
															type="radio"
															id="freshness-refurbished"
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
													{errors.freshness && (
														<div className="invalid-feedback d-block !important">
															{errors.freshness.message}
														</div>
													)}
												</div>
											)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="mb-1">
										<label
											htmlFor="description"
											className="form-label"
										>
											Product Description
										</label>
										<Controller
											name="description"
											control={control}
											defaultValue={product.description}
											rules={{
												required: "Product description is required",
											}}
											render={({ field }) => (
												<div>
													<textarea
														className={`form-control ${
															errors.description ? "is-invalid" : ""
														}`}
														id="description"
														rows={4}
														{...field}
													/>
													{errors.description && (
														<div className="invalid-feedback">
															{errors.description.message}
														</div>
													)}
												</div>
											)}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={handleCloseModal}
							>
								Close
							</button>
							<button
								type="submit"
								className="btn btn-primary"
							>
								Save changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
