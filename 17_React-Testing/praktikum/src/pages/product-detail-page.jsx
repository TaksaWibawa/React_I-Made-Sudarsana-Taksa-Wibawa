import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const { productId } = useParams();
  const payload = useSelector((state) => state.payload);

  const product = payload.find((item) => item.id === productId);

  return (
    <section className='row justify-content-center'>
      <div className='col-6 my-5'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title mb-4'>Product Detail</h3>
            {product ? (
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <img
                    src={product.image}
                    alt={product.image}
                    className='img-fluid rounded'
                  />
                </div>
                <div className='col-12 col-md-6'>
                  <p className='mb-2'>
                    <strong>Name:</strong> {product.name}
                  </p>
                  <p className='mb-2'>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className='mb-2'>
                    <strong>Freshness:</strong> {product.freshness}
                  </p>
                  <p className='mb-2'>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className='mb-2'>
                    <strong>Description:</strong> {product.description}
                  </p>
                </div>
              </div>
            ) : (
              <p className='text-center'>Product not available</p>
            )}
            <Link to='/product' className='btn btn-primary mt-3'>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
