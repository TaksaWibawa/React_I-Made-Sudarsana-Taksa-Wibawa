import { useEffect, useState } from 'react';
import EditProduct from './edit-product';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromPayload, updateProductInPayload } from '../store/product/payload';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.payload);
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(null);
  const [noDataMessageVisible, setNoDataMessageVisible] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setNoDataMessageVisible(true);
    } else {
      setNoDataMessageVisible(false);
    }
  }, [products.length]);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this item?'
    );

    if (shouldDelete) {
      console.log('Delete product with id: ', id);
      dispatch(removeProductFromPayload(id)); // Pass the product id to remove
    }
  };

  const handleEdit = (product) => {
    setEditedProduct(product);
  };

  const handleEditCancel = () => {
    setEditedProduct(null);
  };

  const handleSaveEdits = (id, field, updatedValue) => {
    // Dispatch an action to update the product.
    dispatch(
      updateProductInPayload({
        id,
        updatedProduct: { [field]: updatedValue },
      })
    );
    setEditedProduct(null);
  };

  const handleProductDetail = (id) => {
    navigate(`/product/${id}`, { state: { payload: products } });
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
              const isEditing = editedProduct && editedProduct.id === item.id;

              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td scope="col">
                    {isEditing ? (
                      <EditProduct
                        initialValue={item.name}
                        onSave={(updatedValue) =>
                          handleSaveEdits(item.id, 'name', updatedValue)
                        }
                        fieldName="name"
                        rules={{
                          required: 'Product name is required',
                          maxLength: {
                            value: 25,
                            message: 'Product name must be less than 25 characters',
                          },
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: 'Product name must not contain special characters',
                          },
                        }}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <EditProduct
                        initialValue={item.category}
                        onSave={(updatedValue) =>
                          handleSaveEdits(item.id, 'category', updatedValue)
                        }
                        fieldName="category"
                        rules={{
                          required: 'Product category is required',
                        }}
                      />
                    ) : (
                      item.category
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <EditProduct
                        initialValue={item.freshness}
                        onSave={(updatedValue) =>
                          handleSaveEdits(item.id, 'freshness', updatedValue)
                        }
                        fieldName="freshness"
                        rules={{
                          required: 'Product freshness is required',
                        }}
                      />
                    ) : (
                      item.freshness
                    )}
                  </td>
                  <td scope="col">
                    {isEditing ? (
                      <EditProduct
                        initialValue={item.price}
                        onSave={(updatedValue) =>
                          handleSaveEdits(item.id, 'price', updatedValue)
                        }
                        fieldName="price"
                        rules={{
                          required: 'Product price is required',
                          pattern: {
                            value: /^[1-9][0-9]*$/,
                            message: 'Invalid price format',
                          },
                        }}
                      />
                    ) : (
                      item.price
                    )}
                  </td>
                  <td scope="col" className="d-flex gap-2">
                    {isEditing ? (
                      <div>
                        <button
                          className="btn btn-success me-2"
                          onClick={() => handleSaveEdits(item.id, null, null)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleEditCancel(item.id)}
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
                          onClick={() => handleEdit(item)}
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
