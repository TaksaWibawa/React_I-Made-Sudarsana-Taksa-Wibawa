import Alert from "@/components/alert";
import ProductList from "@/components/productList";
import { useState } from "react";

function ProductForm() {
  const initialFormData = {
    name: "",
    category: "",
    image: "",
    freshness: "",
    description: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(false); // will be used for showing the table maybe

  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // check the form data

    const inputs = document.querySelectorAll(".input");
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    setIsValid((prevIsValid) => {
      let newIsValid = true;

      inputs.forEach((input) => {
        let label = input.id.charAt(0).toUpperCase() + input.id.slice(1);
        let alert = document.getElementById(`alert${label}`);

        if (input.value === "" || input.value === null) {
          input.style.border = "1px solid red";

          if (input.id === "name") {
            switch (true) {
              case input.value.length > 25:
                alert.textContent = `Last name must be less than 25 characters.`;
                break;
              case format.test(input.value):
                alert.textContent = `Name must not contain special characters.`;
                break;
              default:
                alert.textContent = `Product ${label} field must be filled in.`;
                break;
            }
          } else {
            alert.textContent = `Product ${label} field must be filled in.`;
          }
          alert.style.display = "block";
          newIsValid = false; // Set to false if any field is invalid
        } else {
          input.style.border = "1px solid #ced4da";
          alert.textContent = "";
          alert.style.display = "none";
          initialFormData[input.id] = input.value;
        }
      });

      if (newIsValid) {
        //learn on how can we pass data to another component without causing rerendering
        alert(
          `Product Name: ${initialFormData.name}\nProduct Category: ${initialFormData.category}\nImage of Product: ${initialFormData.image}\nProduct Freshness: ${initialFormData.freshness}\nAdditional Description: ${initialFormData.description}\nProduct Price: ${initialFormData.price}`
        );

        document.getElementById("productForm").reset();
      } else {
        alert("Please fill in the form correctly!");
      }

      return newIsValid;
    });
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
                />
              </div>
              <Alert id="alertName" />
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
              <Alert id="alertCategory" />
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
              <Alert id="alertImage" />
            </div>
            <div className="row g-3 mb-4">
              <div className="col-4">
                <label htmlFor="freshness" className="form-label">
                  Product Freshness (WIP)
                </label>
                <br />
                <input
                  type="radio"
                  name="freshness"
                  id="brandNew"
                  className="me-1"
                  defaultValue="Brand New"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Brand New <br />
                <input
                  type="radio"
                  name="freshness"
                  id="secondHand"
                  className="me-1"
                  defaultValue="Second Hand"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Second Hand <br />
                <input
                  type="radio"
                  name="freshness"
                  id="refurbished"
                  className="me-1"
                  defaultValue="Refurbished"
                  onChange={(e) => inputChangeHandler(e)}
                />
                Refurbished
              </div>
              <Alert id="alertFreshness" />
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Additional Description (Optional)
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={7}
                  defaultValue={""}
                  onInput={(e) => inputChangeHandler(e)}
                />
              </div>
              <Alert id="alertDescription" />
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
              <Alert id="alertPrice" />
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
      <ProductList />
    </>
  );
}

export default ProductForm;
