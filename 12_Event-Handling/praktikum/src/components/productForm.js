import { useEffect, useRef, useState } from "react";
import Alert from "@/components/alert";
import ProductList from "@/components/productList";

function ProductForm() {
  const initialFormData = {
    name: "",
    category: "",
    image: "",
    freshness: "",
    description: "",
    price: "",
  };
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
  // for form data
  const [formData, setFormData] = useState(initialFormData);

  // for payload and pass it to ProductList component
  const [payload, setPayload] = useState([]);

  // for error handling
  const [errors, setErrors] = useState({
    name: "",
    category: "",
    image: "",
    freshness: "",
    description: "",
    price: "",
  });

  // trying out useRef
  const inputRef = useRef(null);

  // input change handler
  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // error handling for name
  const nameHandler = (formData) => {
    const newErrors = { ...errors };

    if (formData.name.length > 0) {
      if (formData.name.length > 25) {
        inputRef.current.style.border = "1px solid red";
        newErrors.name = "Last name must be less than 25 characters.";
      } else if (format.test(formData.name)) {
        inputRef.current.style.border = "1px solid red";
        newErrors.name = "Name must not contain special characters.";
      } else {
        inputRef.current.style.border = "1px solid green";
        newErrors.name = "";
      }
    } else {
      inputRef.current.style.border = "";
      newErrors.name = "";
    }

    setErrors(newErrors);
  };

  // useEffect for dynamic error handling for name
  useEffect(() => {
    nameHandler(formData);
  }, [formData.name]);

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...errors };

    for (let key in formData) {
      if (formData[key] === "") {
        newErrors[key] = `Product ${key} must be filled.`;
      } else {
        if (key === "name") {
          if (formData.name.length > 25) {
            newErrors.name = "Last name must be less than 25 characters.";
          } else if (format.test(formData.name)) {
            newErrors.name = "Name must not contain special characters.";
          } else {
            newErrors.name = "";
          }
        } else {
          newErrors[key] = "";
        }
      }
    }

    setErrors(newErrors);

    // check if there are errors
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      alert("Please fix the form errors.");
    } else {
      alert("Form submitted!");
      setPayload([...payload, formData]);
      setFormData(initialFormData);
      document.getElementById("productForm").reset();
    }
  };

  return (
    <>
      <section className="row justify-content-center">
        <div className="col-6 mt-5 px-0">
          <form id="productForm" onSubmit={handleSubmit}>
            <h3 className="mb-4">Detail Product</h3>
            <div className="row g-3 mb-4">
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Product name
                </label>
                <input
                  type="text"
                  className="form-control input"
                  id="name"
                  onChange={(e) => inputChangeHandler(e)}
                  ref={inputRef}
                />
              </div>
              {errors.name ? (
                <Alert
                  id="alertName"
                  style={{ display: "block" }}
                  children={errors.name}
                />
              ) : (
                <Alert
                  id="alertName"
                  style={{ display: "none" }}
                  children={errors.name}
                />
              )}
            </div>
            <div className="row g-3 mb-4">
              <div className="col-4">
                <label htmlFor="category" className="form-label">
                  Product category
                </label>
                <select
                  className="form-select input"
                  id="category"
                  onChange={(e) => inputChangeHandler(e)}
                >
                  <option value="">Choose...</option>
                  <option>...</option>
                </select>
              </div>
              {errors.category ? (
                <Alert
                  id="alertCategory"
                  style={{ display: "block" }}
                  children={errors.category}
                />
              ) : (
                <Alert
                  id="alertCategory"
                  style={{ display: "none" }}
                  children={errors.category}
                />
              )}
            </div>
            <div className="row g-3 mb-4">
              <div className="col-6">
                <label htmlFor="image" className="form-label">
                  {" "}
                  Image of Product{" "}
                </label>
                <input
                  type="file"
                  className="form-control input image"
                  id="image"
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              {errors.image ? (
                <Alert
                  id="alertImage"
                  style={{ display: "block" }}
                  children={errors.image}
                />
              ) : (
                <Alert
                  id="alertImage"
                  style={{ display: "none" }}
                  children={errors.image}
                />
              )}
            </div>
            <div className="row g-3 mb-4">
              <div className="col-4">
                <label htmlFor="freshness" className="form-label">
                  Product Freshness
                </label>
                <br />
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  className="me-1"
                  defaultValue="Brand New"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Brand New <br />
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  className="me-1"
                  defaultValue="Second Hand"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Second Hand <br />
                <input
                  type="radio"
                  name="freshness"
                  id="freshness"
                  className="me-1"
                  defaultValue="Refurbished"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Refurbished
              </div>
              {errors.freshness ? (
                <Alert
                  id="alertFreshness"
                  style={{ display: "block" }}
                  children={errors.freshness}
                />
              ) : (
                <Alert
                  id="alertFreshness"
                  style={{ display: "none" }}
                  children={errors.freshness}
                />
              )}
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Additional Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={7}
                  defaultValue={""}
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              {errors.description ? (
                <Alert
                  id="alertDescription"
                  style={{ display: "block" }}
                  children={errors.description}
                />
              ) : (
                <Alert
                  id="alertDescription"
                  style={{ display: "none" }}
                  children={errors.description}
                />
              )}
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="price" className="form-label">
                  {" "}
                  Product Price{" "}
                </label>
                <input
                  type="number"
                  className="form-control input"
                  id="price"
                  placeholder="$ 1"
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
              {errors.price ? (
                <Alert
                  id="alertPrice"
                  style={{ display: "block" }}
                  children={errors.price}
                />
              ) : (
                <Alert
                  id="alertPrice"
                  style={{ display: "none" }}
                  children={errors.price}
                />
              )}
              <div className="row g-3 mb-4 mt-5">
                <div className="col-12 pe-0 d-flex justify-content-center">
                  <button
                    className="btn btn-primary w-50"
                    type="submit"
                    id="submitButton"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ProductList payload={payload} />
    </>
  );
}

export default ProductForm;
