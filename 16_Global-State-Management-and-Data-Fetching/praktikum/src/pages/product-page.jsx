import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import ProductList from '../components/product-list';
import Header from '../components/header';

import { addProductToPayload } from '../store/product/payload';

function ProductForm() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      id: '',
      name: '',
      category: '',
      freshness: '',
      price: '',
      image: '',
      description: ''
    },
  });

  const onSubmit = (data) => {
    alert('Form submitted!');
    data.id = uuidv4();
    dispatch(addProductToPayload(data));
  };

  const validateFreshness = (value) => {
    return !!value || 'Freshness is required';
  };

  return (
    <>
      <Header />
      <section className='row justify-content-center'>
        <div className='col-6 mt-5 px-0'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className='mb-4'>Detail Product</h3>
            <div className='row g-3 mb-4'>
              <div className='col-8'>
                <label htmlFor='name' className='form-label'>
                  Product name
                </label>
                <Controller
                  name='name'
                  control={control}
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
                  render={({ field }) => (
                    <input
                      type='text'
                      className={`form-control input ${errors.name ? 'is-invalid' : ''}`}
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name.message}</div>
                )}
              </div>
              <div className='col-4'>
                <label htmlFor='category' className='form-label'>
                  Product category
                </label>
                <Controller
                  name='category'
                  control={control}
                  rules={{ required: 'Product category is required' }}
                  render={({ field }) => (
                    <select
                      className={`form-select input ${errors.category ? 'is-invalid' : ''}`}
                      {...field}
                    >
                      <option value=''>Choose...</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  )}
                />
                {errors.category && (
                  <div className='invalid-feedback'>{errors.category.message}</div>
                )}
              </div>
            </div>
            <div className='row g-3 mb-4'>
              <div className='col-8'>
                <label htmlFor='image' className='form-label'>
                  {' '}
                  Image of Product{' '}
                </label>
                <Controller
                  name="image"
                  control={control}
                  rules={{ required: 'Image is required' }}
                  render={({ field }) => (
                    <input
                      type="file"
                      className={`form-control input image ${errors.image ? 'is-invalid' : ''}`}
                      id="image"
                      accept='image/*'
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
                  )}
                />
                {errors.image && (
                  <div className='invalid-feedback'>{errors.image.message}</div>
                )}
              </div>
              <div className='col-4'>
                <label htmlFor='freshness' className='form-label'>Product Freshness</label>
                <Controller
                  name='freshness'
                  control={control}
                  rules={{
                    validate: validateFreshness
                  }}
                  render={({ field }) => (
                    <div className='radio-group'>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='freshness-brand-new'
                          value='Brand New'
                          className='form-check-input'
                          onChange={(e) => field.onChange(e.target.value)}
                          checked={field.value === 'Brand New'}
                        />
                        <label htmlFor='freshness-brand-new' className='form-check-label'>
                          Brand New
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='freshness-second-hand'
                          value='Second Hand'
                          className='form-check-input'
                          onChange={(e) => field.onChange(e.target.value)}
                          checked={field.value === 'Second Hand'}
                        />
                        <label htmlFor='freshness-second-hand' className='form-check-label'>
                          Second Hand
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <input
                          type='radio'
                          id='freshness-refurbished'
                          value='Refurbished'
                          className='form-check-input'
                          onChange={(e) => field.onChange(e.target.value)}
                          checked={field.value === 'Refurbished'}
                        />
                        <label htmlFor='freshness-refurbished' className='form-check-label'>
                          Refurbished
                        </label>
                      </div>
                    </div>
                  )}
                />
                {errors.freshness && (
                  <div className='invalid-feedback d-block !important'>{errors.freshness.message}</div>
                )}
              </div>
            </div>
            <div className='row g-3 mb-4'>
              <div className='col-12'>
                <label htmlFor='description' className='form-label'>
                  Additional Description
                </label>
                <Controller
                  name='description'
                  control={control}
                  rules={{ required: 'Description is required' }}
                  render={({ field }) => (
                    <textarea
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      id='description'
                      rows={7}
                      {...field}
                    />
                  )}
                />
                {errors.description && (
                  <div className='invalid-feedback'>{errors.description.message}</div>
                )}
              </div>
            </div>
            <div className='row g-3 mb-4'>
              <div className='col-12'>
                <label htmlFor='price' className='form-label'>
                  {' '}
                  Product Price{' '}
                </label>
                <Controller
                  name='price'
                  control={control}
                  rules={{
                    required: 'Price is required',
                    pattern: {
                      value: /^[1-9][0-9]*$/,
                      message: 'Invalid price format',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type='number'
                      className={`form-control input ${errors.price ? 'is-invalid' : ''}`}
                      id='price'
                      placeholder='$ 1'
                      {...field}
                    />
                  )}
                />
                {errors.price && (
                  <div className='invalid-feedback'>{errors.price.message}</div>
                )}
              </div>
            </div>
            <div className='row g-3 mb-4 mt-5'>
              <div className='col-12 pe-0 d-flex justify-content-center'>
                <button className='btn btn-primary w-50' type='submit' id='submitButton'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ProductList />
    </>
  );
}

export default ProductForm;
