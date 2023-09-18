import React, { useEffect, useState } from "react";

function ProductList({ payload }) {
  const [products, setProducts] = useState([]);
  const [noDataMessageVisible, setNoDataMessageVisible] = useState(true);

  // add unique key to each product
  useEffect(() => {
    if (payload.length > 0) {
      setProducts(
        payload.map((item, index) => {
          return { ...item, id: index + 1 };
        })
      );
      setNoDataMessageVisible(false);
    } else {
      setNoDataMessageVisible(true);
    }
  }, [payload]);

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
            {products.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.category}</td>
                  <td scope="col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </td>
                  <td scope="col">{item.freshness}</td>
                  <td scope="col">{item.description}</td>
                  <td scope="col">{item.price}</td>
                </tr>
              );
            })}
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
          <button
            className="btn btn-outline-primary mt-2"
            onClick={
              // create random number on console
              () => {
                console.log(Math.floor(Math.random() * 100));
              }
            }
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
