import React, { useState } from "react";

function ProductList() {
  // const [products, setProducts] = useState([]);
  const [noDataMessageVisible, setNoDataMessageVisible] = useState(true);

  return (
    <section className="mx-5">
      <div id="container-fluid">
        <h2 className="fs-3 text-center my-3">List Product</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.image}</td>
                <td>{product.freshness}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))} */}
            {noDataMessageVisible && (
              <tr id="noDataMessage" className="d-table-row d-block">
                <td colSpan={7} className="text-center">
                  No Data is Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mb-5" id="tableForm">
          <input
            type="text"
            placeholder="Enter Product Name..."
            className="form-control w-25"
          />
          <button className="btn btn-danger mt-2 me-2" id="delete">
            Deletion
          </button>
          <button className="btn btn-outline-primary mt-2">Search</button>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
