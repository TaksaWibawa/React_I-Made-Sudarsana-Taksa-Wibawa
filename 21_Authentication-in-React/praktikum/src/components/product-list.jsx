import { deleteProduct } from "../store/products/delete-product";
import { fetchProducts, selectProducts } from "../store/products/get-products";
import { ProductEditModal } from "../components/product-edit-modal";
import { ProductRow } from "./product-rows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProductList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const stateProducts = useSelector(selectProducts);
	const { status, message, data } = stateProducts;

	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	useEffect(() => {
		dispatch(fetchProducts({ page: currentPage, perPage: itemsPerPage }));
	}, [dispatch, currentPage, itemsPerPage]);

	const handleDelete = (id) => {
		const shouldDelete = window.confirm(
			"Are you sure you want to delete this item?"
		);

		if (shouldDelete) {
			dispatch(deleteProduct(id))
				.then(() => {
					dispatch(fetchProducts({ page: currentPage, perPage: itemsPerPage }));
				})
				.catch((error) => {
					console.error("Delete product error: ", error);
				});

			alert("Product has been deleted!");
		}
	};

	const handleEdit = (id) => {
		const productToEdit = data.find((item) => item.id === id);
		setSelectedProduct(productToEdit);
		setShowEditModal(true);
	};

	const handleProductDetail = (id) => {
		navigate(`/product/${id}`);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const displayedData = data.slice(startIndex, endIndex);

	return (
		<section className="mx-5">
			<div id="container-fluid">
				<h2 className="fs-3 text-center my-3">List Product</h2>
				<div className="table-responsive">
					<table className="table table-bordered table-striped table-hover">
						<thead className="text-center align-middle">
							<tr>
								<th scope="col">Product ID</th>
								<th scope="col">Product Name</th>
								<th scope="col">Product Category</th>
								<th scope="col">Product Freshness</th>
								<th scope="col">Product Price</th>
								<th scope="col">Product Image</th>
								<th scope="col">Product Description</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody className="align-middle text-center">
							{status === "pending" && (
								<tr className="d-table-row d-block">
									<td colSpan={9}>Loading...</td>
								</tr>
							)}
							{status === "failed" && (
								<tr className="d-table-row d-block">
									<td colSpan={9}>{message}</td>
								</tr>
							)}
							{status === "fulfilled" &&
								displayedData.map((item) => (
									<ProductRow
										key={item.id}
										item={item}
										onDelete={handleDelete}
										onEdit={handleEdit}
										onDetail={handleProductDetail}
									/>
								))}
							{displayedData.length === 0 && status === "fulfilled" && (
								<tr
									id="noDataMessage"
									className="d-table-row d-block"
								>
									<td colSpan={9}>No Data is Found!</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				{displayedData.length > 0 && status === "fulfilled" && (
					<div className="d-flex justify-content-center mb-3 align-items-center">
						<button
							className="btn btn-primary"
							onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
							disabled={currentPage === 1}
						>
							Previous Page
						</button>
						<span className="mx-3">
							Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
						</span>
						<button
							className="btn btn-primary"
							onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
							disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
						>
							Next Page
						</button>
					</div>
				)}
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
