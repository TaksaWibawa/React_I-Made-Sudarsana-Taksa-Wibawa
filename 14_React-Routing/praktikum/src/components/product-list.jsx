import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ProductList({ payload, updatePayload }) {
  const [products, setProducts] = useState([]);
  const [noDataMessageVisible, setNoDataMessageVisible] = useState(true);
  const [editedProduct, setEditedProduct] = useState(null);
  const navigate = useNavigate();

  // add unique key to each product and also fetch the payload from the parent component
  useEffect(() => {
    const productsWithKey = payload.map((item) => {
      // Check if the item already has an 'id' (UUID), and if not, generate one.
      const id = item.id || uuidv4().slice(0, 4);
      return { ...item, id };
    });
    setProducts(productsWithKey);
  }, [payload]);

  // delete product by its ID
  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (shouldDelete) {
      // delete the product from the products state
      const filteredProducts = products.filter((item) => item.id !== id);
      setProducts(filteredProducts);

      // update the payload in the parent component
      updatePayload(filteredProducts);
    }
  };

  // find the product by its ID and edit it
  const handleEdit = (id) => {
    // find the product by its ID
    const productToEdit = products.find((item) => item.id === id);
    setEditedProduct(productToEdit);
  };

  // if cancel, clear the edited product state to close the edit input fields
  const handleEditCancel = () => {
    setEditedProduct(null);
  };

  // save the edited product details
  const handleSaveEdits = () => {
    // find the product by its ID and edit it
    const updatedProducts = products.map((item) => {
      if (item.id === editedProduct.id) {
        return { ...item, ...editedProduct };
      }
      return item;
    });

    // update the products state
    setProducts(updatedProducts);

    // clear the edited product state to close the edit input fields
    setEditedProduct(null);

    // update the payload in the parent component
    updatePayload(updatedProducts);
  };

  // show no data message if there is no product
  useEffect(() => {
    if (products.length === 0) {
      setNoDataMessageVisible(true);
    } else {
      setNoDataMessageVisible(false);
    }
  }, [products]);

  // redirect to the product detail page
  const handleProductDetail = (id) => {
    navigate(`/product/${id}`, { state: { payload } });
  };

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
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              const isEditing = editedProduct && editedProduct.id === item.id; // check if the product is being edited. if yes, show the input fields
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td scope="col">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProduct.name}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProduct.category}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            category: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.category
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProduct.freshness}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            freshness: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.freshness
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProduct.price}
                        onChange={(e) =>
                          setEditedProduct({
                            ...editedProduct,
                            price: e.target.value,
                          })
                        }
                      />
                    ) : (
                      item.price
                    )}
                  </td>
                  <td scope="col" className="d-flex gap-2">
                    {isEditing ? ( // if the product is being edited, show the save and cancel button. if not, show the delete and edit button
                      <div>
                        <button
                          className="btn btn-success me-2"
                          onClick={handleSaveEdits}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={handleEditCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div>
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
                    )}
                  </td>
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
      </div>
    </section>
  );
}

export default ProductList;
