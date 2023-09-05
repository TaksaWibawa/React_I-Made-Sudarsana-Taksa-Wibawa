const form = document.getElementById("productForm");
const inputs = document.querySelectorAll(".input");
const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const productList = document.querySelector("tbody");
const searchButton = document.querySelector(
  "#tableForm button.btn-outline-primary"
);

form.addEventListener("submit", validateForm);
searchButton.addEventListener("click", search);

function validateForm(event) {
  event.preventDefault();

  const formData = {};
  let isValid = true;

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
      isValid = false;
    } else {
      input.style.border = "1px solid #ced4da";
      alert.textContent = "";
      alert.style.display = "none";
      formData[input.id] = input.value;
    }
  });

  if (isValid) {
    addDataToTable(formData);
    form.reset();
  }
}

function addDataToTable(formData) {
  const newRow = document.createElement("tr");
  newRow.style.display = "table-row";

  const freshness = document.querySelector(
    'input[name="freshness"]:checked'
  ).value;
  const description = document.getElementById("description").value;

  newRow.innerHTML = `
      <td>${getNewRowIndex()}</td>
      <td>${formData.name}</td>
      <td>${formData.category}</td>
      <td><img src="${formData.image}" alt="Product Image" width="100"></td>
      <td>${freshness}</td>
      <td>${description}</td>
      <td>$${formData.price}</td>
    `;

  productList.appendChild(newRow);

  updateNoDataMessage();
}

function deleteRow() {
  const productNameInput = document.querySelector("#tableForm input");
  const productName = productNameInput.value.trim().toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  let rowsDeleted = false;

  rows.forEach((row) => {
    const productNameCell = row.querySelector("td:nth-child(2)");

    if (productNameCell) {
      const cellText = productNameCell.textContent.toLowerCase();

      if (cellText === productName) {
        row.remove();
        rowsDeleted = true;
      }
    }
  });

  if (!rowsDeleted) {
    alert("Product name not found.");
  }

  const updatedRows = document.querySelectorAll("tbody tr");
  let index = 1;

  updatedRows.forEach((row) => {
    if (row.id !== "noDataMessage") {
      row.querySelector("td:nth-child(1)").textContent = index++;
    }
  });

  updateNoDataMessage();

  productNameInput.value = "";
}

function search() {
  const productNameInput = document.querySelector("#tableForm input");
  const productName = productNameInput.value.trim().toLowerCase();

  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const productNameCell = row.querySelector("td:nth-child(2)");

    if (productNameCell) {
      const cellText = productNameCell.textContent.toLowerCase();
      const noDataMessage = document.getElementById("noDataMessage");

      if (cellText.includes(productName)) {
        row.style.display = "table-row";
        noDataMessage.classList.remove("d-block");
        noDataMessage.classList.add("d-none");
      } else {
        row.style.display = "none";
        noDataMessage.classList.remove("d-none");
        noDataMessage.classList.add("d-block");
      }
    }
  });
}

function getNewRowIndex() {
  const rows = document.querySelectorAll("tbody tr");
  return rows.length;
}

function updateNoDataMessage() {
  const noDataMessage = document.getElementById("noDataMessage");
  if (productList.children.length <= 1) {
    noDataMessage.classList.remove("d-none");
    noDataMessage.classList.add("d-block");
  } else {
    noDataMessage.classList.remove("d-block");
    noDataMessage.classList.add("d-none");
  }
}
