import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProductFromPayload } from "../store/product/payload";
import ProductEditModal from "../components/product-edit-modal";

function ProductList() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.payload);
	const navigate = useNavigate();

	const [noDataMessageVisible, setNoDataMessageVisible] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		if (products.length === 0) {
			setNoDataMessageVisible(true);
		} else {
			setNoDataMessageVisible(false);
		}
	}, [products.length]);

	const handleDelete = (id) => {
		const shouldDelete = window.confirm(
			"Are you sure you want to delete this item?"
		);

		if (shouldDelete) {
			console.log("Delete product with id: ", id);
			dispatch(removeProductFromPayload(id));
		}
	};

	const handleEdit = (id) => {
		const productToEdit = products.find((item) => item.id === id);
		setSelectedProduct(productToEdit);
		setShowEditModal(true);
	};

	const handleProductDetail = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<section className="mx-5">
			<div id="container-fluid">
				<h2 className="fs-3 text-center my-3">List Product</h2>
				<div className="table-responsive">
					<table className="table table-bordered table-striped table-hover">
						<thead>
							<tr>
								<th
									scope="col"
									className="text-center"
								>
									Product ID
								</th>
								<th
									scope="col"
									className="text-center"
								>
									Product Name
								</th>
								<th
									scope="col"
									className="text-center"
								>
									Product Category
								</th>
								<th
									scope="col"
									className="text-center"
								>
									Product Freshness
								</th>
								<th
									scope="col"
									className="text-center"
								>
									Product Price
								</th>
								<th
									scope="col"
									className="text-center"
								>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{products.map((item) => {
								return (
									<tr key={item.id}>
										<th
											scope="row"
											className="text-center"
										>
											{item.id}
										</th>
										<td
											scope="col"
											className="text-center"
										>
											{item.name}
										</td>
										<td
											scope="col"
											className="text-center"
										>
											{item.category}
										</td>
										<td
											scope="col"
											className="text-center"
										>
											{item.freshness}
										</td>
										<td
											scope="col"
											className="text-center"
										>
											{item.price}
										</td>
										<td
											scope="col"
											className="text-center"
										>
											<div className="d-flex justify-content-center align-items-center">
												<button
													className="btn btn-danger me-2"
													onClick={() => handleDelete(item.id)}
												>
													Delete
												</button>
												<button
													className="btn btn-primary me-2"
													onClick={() => handleEdit(item.id)}
												>
													Edit
												</button>
												<button
													className="btn btn-secondary"
													onClick={() => handleProductDetail(item.id)}
												>
													Detail
												</button>
											</div>
										</td>
									</tr>
								);
							})}
							{noDataMessageVisible && (
								<tr
									id="noDataMessage"
									className="d-table-row d-block"
								>
									<td
										colSpan={6}
										className="text-center"
									>
										No Data is Found!
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

			{selectedProduct && (
				<ProductEditModal
					product={selectedProduct}
					setProduct={setSelectedProduct}
					showModal={showEditModal}
					setShowModal={setShowEditModal}
				/>
			)}
		</section>
	);
}

export default ProductList;
