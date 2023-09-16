const form = document.getElementById("productForm"); // form untuk product
const inputs = document.querySelectorAll(".input"); // menyimpan semua input dengan class input
const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // regex untuk mengecek format input

const productList = document.querySelector("tbody"); // menyimpan list dari product yang tersimpan pada tabel

const tableInput = document.querySelector("#tableForm input"); // menyimpan nilai yang ada pada field input pada form tabel
let rows = document.querySelectorAll("tbody tr"); // menyimpan semua baris yang ada pada tabel
const searchButton = document.querySelector("#tableForm button#search"); // menyimpan button search
const deleteButton = document.querySelector("#tableForm button#delete"); // menyimpan button delete

const noDataMessage = document.getElementById("noDataMessage"); // menyimpan pesan jika tidak ada data pada tabel

// menambahkan event listener pada form, button search, dan button delete
form.addEventListener("submit", validateForm);
searchButton.addEventListener("click", search);
deleteButton.addEventListener("click", deleteRow);

function validateForm(event) {
  // fungsi untuk mengecek apakah form sudah terisi dengan benar
  event.preventDefault();

  const formData = {};
  let isValid = true;

  inputs.forEach((input) => {
    let label = input.id.charAt(0).toUpperCase() + input.id.slice(1);
    let alert = document.getElementById(`alert${label}`);

    if (input.value === "" || input.value === null) {
      // jika input kosong
      input.style.border = "1px solid red";

      if (input.id === "name") {
        // jika input kosong pada field name
        switch (true) {
          case input.value.length > 25: // jika panjang input lebih dari 25 karakter
            alert.textContent = `Last name must be less than 25 characters.`;
            break;
          case format.test(input.value): // jika input mengandung karakter spesial atau simbol
            alert.textContent = `Name must not contain special characters.`;
            break;
          default: // jika input kosong
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
      formData[input.id] = input.value; // menyimpan nilai dari input ke dalam formData
    }
  });

  if (isValid) {
    // jika form sudah terisi dengan benar
    addDataToTable(formData); // menambahkan data ke dalam tabel
    form.reset(); // mereset form
  }
}

function addDataToTable(formData) {
  // fungsi untuk menambahkan data ke dalam tabel
  const newRow = document.createElement("tr"); // membuat baris baru
  newRow.classList.add("d-table-row"); // menambahkan class d-table-row pada baris baru

  const freshness = document.querySelector(
    // menyimpan nilai dari radio button
    'input[name="freshness"]:checked'
  ).value;
  const description = document.getElementById("description").value; // menyimpan nilai dari textarea

  const rowData = createNewRow(freshness, description, formData); // membuat data untuk baris baru sebagai alternatif dari penggunaan innerHTML
  rowData.forEach((cell) => {
    // menambahkan data ke dalam baris baru
    newRow.appendChild(cell);
  });

  productList.appendChild(newRow); // menambahkan baris baru ke dalam tabel
  rows = updatedRows(); // menyimpan ulang baris yang diperbarui
  updateNoDataMessage(rows.length === 1); // menampilkan pesan jika tabel kosong
}

/**
 *
 * @param {string} freshness
 * @param {string} description
 * @param {Object} formData
 * @returns {rowData[]} - array of table cells
 */
// fungsi untuk membuat data untuk baris baru
function createNewRow(freshness, description, formData) {
  const indexCell = document.createElement("td"); // membuat kolom untuk penomoran
  indexCell.textContent = rows.length;

  const nameCell = document.createElement("td"); // membuat kolom untuk nama produk
  nameCell.textContent = formData.name;

  const categoryCell = document.createElement("td"); // membuat kolom untuk kategori produk
  categoryCell.textContent = formData.category;

  const imageCell = document.createElement("td"); // membuat kolom untuk gambar produk
  const image = document.createElement("img");
  image.src = formData.image;

  const freshnessCell = document.createElement("td"); // membuat kolom untuk tingkat kesegaran produk
  freshnessCell.textContent = freshness;

  const descriptionCell = document.createElement("td"); // membuat kolom untuk deskripsi produk
  descriptionCell.textContent = description;

  const priceCell = document.createElement("td"); // membuat kolom untuk harga produk
  priceCell.textContent = `$${formData.price}`;

  return [
    // mengembalikan array yang berisi data untuk baris baru
    indexCell,
    nameCell,
    categoryCell,
    imageCell.appendChild(image),
    freshnessCell,
    descriptionCell,
    priceCell,
  ];
}

function deleteRow() {
  // fungsi untuk menghapus baris pada tabel
  let rowsDeleted = false;

  rows.forEach((row) => {
    // menghapus baris yang memiliki nama produk yang sama dengan nilai dari field input pada form tabel
    const productNameCell = row.querySelector("td:nth-child(2)");

    if (productNameCell) {
      // jika nama produk ada
      const cellText = productNameCell.textContent.toLowerCase();

      if (cellText === tableInput.value.trim().toLowerCase()) {
        // jika nama produk sama dengan nilai dari field input pada form tabel
        row.remove(); // menghapus baris
        rowsDeleted = true;
      }
    }
  });

  if (!rowsDeleted) {
    // jika nama produk tidak ditemukan
    alert("Product name not found.");
  }

  rows = updatedRows(); // menyimpan ulang baris yang diperbarui
  rows.forEach((row, index = 1) => {
    // mengubah nomor pada kolom penomoran
    if (row.id !== "noDataMessage") {
      row.querySelector("td:nth-child(1)").textContent = index++;
    }
  });
  updateNoDataMessage(rows.length === 1); // menampilkan pesan jika tabel kosong
  tableInput.value = ""; // mereset field input pada form tabel
}

function search() {
  // fungsi untuk mencari nama produk pada tabel
  let rowFound = false;
  rows.forEach((row) => {
    // mencari nama produk yang sama dengan nilai dari field input pada form tabel
    const productNameCell = row.querySelector("td:nth-child(2)");

    if (productNameCell) {
      // jika nama produk ada
      const cellText = productNameCell.textContent.toLowerCase();

      cellText.includes(tableInput.value.trim().toLowerCase()) // jika nama produk mengandung nilai dari field input pada form tabel
        ? (row.classList.replace("d-none", "d-table-row"), (rowFound = true)) // menampilkan baris
        : row.classList.replace("d-table-row", "d-none"); // menyembunyikan baris
    }
  });
  updateNoDataMessage(!rowFound); // menampilkan pesan jika nama produk tidak ditemukan
}

/**
 *
 * @param {boolean} isEmpty - true if table is empty, false otherwise
 */
function updateNoDataMessage(isEmpty) {
  // fungsi untuk menampilkan pesan jika tabel kosong
  isEmpty
    ? noDataMessage.classList.replace("d-none", "d-table-row") // menampilkan pesan
    : noDataMessage.classList.replace("d-table-row", "d-none"); // menyembunyikan pesan
}

function updatedRows() {
  // fungsi untuk menyimpan ulang baris yang diperbarui
  let updatedRows = document.querySelectorAll("tbody tr");
  return updatedRows; // mengembalikan baris yang diperbarui
}

(() => {
  // IIFE untuk langsung menampilkan pesan jika tabel kosong
  updateNoDataMessage(rows.length === 1);
})();
