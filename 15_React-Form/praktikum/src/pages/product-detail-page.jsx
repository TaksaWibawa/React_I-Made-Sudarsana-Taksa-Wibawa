import { useLocation, useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  const { payload } = location.state || {};
  const { productId } = useParams();

  const product = payload.find((item) => item.id === productId);

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        {product ? (
          <div className='col-12'>
            <h2 className='fs-3 mb-4'>
              <strong>Product Name:</strong> {product.name}
            </h2>
            <h2 className='fs-3 mb-4'>
              <strong>Product Category:</strong> {product.category}
            </h2>
            <h2 className='fs-3 mb-4'>
              <strong>Product Freshness:</strong> {product.freshness}
            </h2>
            <h2 className='fs-3 mb-4'>
              <strong>Product Price:</strong> {product.price}
            </h2>
          </div>
        ) : (
          <p className='fs-5 mt-3 text-center'>Product not found.</p>
        )}
      </div>
      <div className='mb-3 justify-content-start'>
          <Link to='/product' className='btn btn-primary w-20'>
            Back to Product
          </Link>
        </div>
    </div>
  );
}

export default ProductDetail;
