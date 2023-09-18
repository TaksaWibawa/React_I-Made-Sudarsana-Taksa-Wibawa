import React, { useEffect, useState } from "react";
import Alert from "@/components/alert";
import AccountList from "./accountList";

function AccountForm() {
  // alert welcome when mounted and only once
  useEffect(() => {
    alert("Welcome");
  }, []);

  const initialFormData = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    gender: "",
    address: "",
    address2: "",
    nationality: "",
    languages: {
      indonesia: false,
      english: false,
      others: false,
    },
  };

  // for form data
  const [formData, setFormData] = useState(initialFormData);

  // for payload
  const [payload, setPayload] = useState([]);

  // for error handling
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    gender: "",
    address: "",
    nationality: "",
    languages: "",
  });

  // input change handler
  const inputChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Checkbox change handler for languages checkboxes
  const languageCheckboxChangeHandler = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;

    setFormData((prevFormData) => ({
      ...prevFormData,
      languages: {
        ...prevFormData.languages,
        [checkboxName]: isChecked,
      },
    }));

    // Clear error for the languages checkbox
    setErrors((prevErrors) => ({
      ...prevErrors,
      languages: "",
    }));
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...errors };

    for (let key in formData) {
      if (key === "languages") {
        const selectedLanguages = Object.values(formData.languages);
        if (!selectedLanguages.includes(true)) {
          newErrors.languages = "Select at least one language.";
        } else {
          newErrors.languages = "";
        }
      } else if (formData[key] === "") {
        document.getElementById(key).style.border = "1px solid red";
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } must be filled.`;
      } else {
        newErrors[key] = "";
        document.getElementById(key).style.border = "1px solid green";
      }
    }

    // Check if there are errors
    const hasErrors = Object.values(newErrors).some(
      (error) => typeof error === "string" && error
    );

    if (hasErrors) {
      alert("Please fix the form errors.");
    } else {
      alert("Form submitted!");
      setPayload([...payload, formData]);
      setFormData(initialFormData);
      document.getElementById("accountForm").reset();
    }

    setErrors(newErrors);
  };

  return (
    <>
      <section className="row justify-content-center">
        <div className="col-6 mt-5 px-0">
          <form id="accountForm" onSubmit={handleSubmit}>
            <h3 className="mb-4">Detail Account</h3>
            <div className="row g-3 mb-4">
              <div className="col-6">
                <label htmlFor="fname" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control input"
                  id="fname"
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.fname && (
                  <Alert
                    id="alertFname"
                    style={{ display: "block" }}
                    children={errors.fname}
                  />
                )}
              </div>
              <div className="col-6">
                <label htmlFor="lname" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control input"
                  id="lname"
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.lname && (
                  <Alert
                    id="alertLname"
                    style={{ display: "block" }}
                    children={errors.lname}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group" id="username">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                    onChange={(e) => inputChangeHandler(e)}
                  />
                </div>
                {errors.username && (
                  <Alert
                    id="alertUsername"
                    style={{ display: "block" }}
                    children={errors.username}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  id="email"
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.email && (
                  <Alert
                    id="alertEmail"
                    style={{ display: "block" }}
                    children={errors.email}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      defaultValue="Male"
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <label className="form-check-label" htmlFor="maleRadio">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      defaultValue="Female"
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <label className="form-check-label" htmlFor="femaleRadio">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline-flex">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender"
                      defaultValue="Other"
                      onChange={(e) => inputChangeHandler(e)}
                    />
                    <label className="form-check-label" htmlFor="otherRadio">
                      Other
                    </label>
                  </div>
                  {errors.gender && (
                    <Alert
                      id="alertGender"
                      style={{ display: "block" }}
                      children={errors.gender}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 Main St"
                  id="address"
                  onChange={(e) => inputChangeHandler(e)}
                />
                {errors.address && (
                  <Alert
                    id="alertAddress"
                    style={{ display: "block" }}
                    children={errors.address}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="address-2" className="form-label optional">
                  Address 2 <span>(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment or suite"
                  id="address2"
                  onChange={(e) => inputChangeHandler(e)}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-6 mb-4">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <select
                  className="form-select"
                  id="nationality"
                  name="nationality"
                  onChange={(e) => inputChangeHandler(e)}
                >
                  <option value="" selected disabled className="text-light">
                    Choose...
                  </option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Malaysian">Malaysian</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Saudi Arabian">Saudi Arabian</option>
                </select>
                {errors.nationality && (
                  <Alert
                    id="alertNationality"
                    style={{ display: "block" }}
                    children={errors.nationality}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label htmlFor="languages" className="form-label">
                  Language Spoken
                </label>
                <br />
                <div className="form-check" aria-required="true">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="indonesia"
                    id="indonesia"
                    defaultValue="Indonesia"
                    onChange={(e) => languageCheckboxChangeHandler(e)}
                  />
                  <label className="form-check-label" htmlFor="indonesia">
                    Bahasa Indonesia
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="english"
                    id="english"
                    defaultValue="English"
                    onChange={(e) => languageCheckboxChangeHandler(e)}
                  />
                  <label className="form-check-label" htmlFor="english">
                    English
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="others"
                    id="others"
                    defaultValue="Other"
                    onChange={(e) => languageCheckboxChangeHandler(e)}
                  />
                  <label className="form-check-label" htmlFor="others">
                    Other
                  </label>
                </div>
                {errors.languages && (
                  <Alert
                    id="alertLanguages"
                    style={{ display: "block" }}
                    children={errors.languages}
                  />
                )}
              </div>
            </div>
            <div className="row g-3 my-4">
              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn btn-primary w-75"
                  type="submit"
                  id="submitButton"
                >
                  Create Account
                </button>
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <div
                  className="alert alert-danger"
                  role="alert"
                  id="errorAlert"
                  style={{ display: "none" }}
                >
                  Please fill in the form correctly.
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <AccountList payload={payload} />
    </>
  );
}

export default AccountForm;
