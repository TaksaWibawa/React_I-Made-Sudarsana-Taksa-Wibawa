/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import {
	FileInput,
	NumberInput,
	RadioInput,
	SelectInput,
	TextAreaInput,
	TextInput,
} from "./form-components";
import { fetchProducts } from "../store/products/get-products";
import { updateProduct } from "../store/products/update-product";

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

	const handleSaveEditsModal = handleSubmit((updatedProduct) => {
		console.log("updatedProduct: ", updatedProduct);
		if (updatedProduct.image) {
			updatedProduct.image = URL.createObjectURL(updatedProduct.image);
		}
		if (product) {
			try {
				dispatch(updateProduct(updatedProduct))
					.then(() => {
						alert("Product has been updated!");
						dispatch(fetchProducts());
						reset();
					})
					.catch((error) => {
						console.error("Update product error: ", error);
					});
			} catch (error) {
				alert("Failed to update product!");
			}
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
							<div className="row my-2">
								<div className="col-12">
									<div className="mb-1">
										<label
											htmlFor="id"
											className="form-label"
										>
											Product ID
										</label>
										<Controller
											name="id"
											control={control}
											defaultValue={product.id}
											render={({ field }) => (
												<input
													id="id"
													name="id"
													role="input"
													type="text"
													className={`form-control input`}
													disabled
													{...field}
												/>
											)}
										/>
									</div>
								</div>
							</div>
							<div className="row my-2">
								<div className="col-6">
									<div className="mb-1">
										<TextInput
											label="Product name"
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
											errors={errors}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="mb-1">
										<SelectInput
											label="Product category"
											name="category"
											defaultValue={product.category}
											control={control}
											rules={{ required: "Product category is required" }}
											errors={errors}
											options={[
												"Choose Category",
												"Laptop",
												"Phone",
												"Keyboard",
											]}
										/>
									</div>
								</div>
							</div>
							<div className="row my-2">
								<div className="col-12">
									<div className="mb-1">
										<FileInput
											label="Product Image"
											name="image"
											defaultValue={product.image}
											control={control}
											rules={{ required: "Product image is required" }}
											errors={errors}
										/>
									</div>
								</div>
							</div>
							<div className="row my-2">
								<div className="col-6">
									<div className="mb-1">
										<NumberInput
											label="Product Price"
											name="price"
											defaultValue={product.price}
											control={control}
											rules={{
												required: "Product price is required",
												pattern: {
													value: /^[1-9][0-9]*$/,
													message: "Invalid price format",
												},
											}}
											errors={errors}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="mb-1">
										<RadioInput
											label="Product Freshness"
											name="freshness"
											defaultChecked={product.freshness}
											control={control}
											rules={{
												validate: validateFreshness,
											}}
											errors={errors}
											options={["Brand New", "Second Hand", "Refurbished"]}
										/>
									</div>
								</div>
							</div>
							<div className="row my-2">
								<div className="col-12">
									<div className="mb-1">
										<TextAreaInput
											label="Product Description"
											name="description"
											defaultValue={product.description}
											control={control}
											rules={{ required: "Product description is required" }}
											errors={errors}
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
