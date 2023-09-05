document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("productForm");
  const inputs = document.querySelectorAll(".input");
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    inputs.forEach((input) => {
      let label = input.id.charAt(0).toUpperCase() + input.id.slice(1);
      let alert = document.getElementById(`alert${label}`);

      if (input.value === "" || input.value === null || input.id === "name") {
        input.style.border = "1px solid red";

        if (input.id === "name") {
          switch (true) {
            case input.value.length > 25:
              alert.innerText = `Last name must be less than 25 characters.`;
              break;
            case format.test(input.value):
              alert.innerText = `Name must not contain special characters.`;
              break;
            default:
              alert.innerText = `Product ${label} field must be filled in.`;
              break;
          }
        } else {
          alert.innerText = `Product ${label} field must be filled in.`;
        }
        alert.style.display = "block";
        return false;
      } else {
        input.style.border = "1px solid #ced4da";
        alert.innerText.replace(alert.innerText, "");
        alert.style.display = "none";
        return true;
      }
    });
  });
});

// Note to myself: 
// learn on how can we do DOM for validating input group like radio button, checkbox, etc. (possibly done by treat them as an array maybe?)
