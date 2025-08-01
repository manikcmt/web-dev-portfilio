// for form validation
function formValidation(event) {
    event.preventDefault(); // prevent form submission

    const form = event.target || document.querySelector("form");
    let isValid = true;

    const firstName = document.getElementById("inputFirstName");
    const email = document.getElementById("inputEmail");
    const cardNumber = document.getElementById("inputCardNumber");

    // Helper function to validate field
    function validateField(input, condition, message = "") {
      const error = input.nextElementSibling;
      if (!condition) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        isValid = false;

        if (!error || !error.classList.contains("form-error")) {
          const errorMsg = document.createElement("div");
          errorMsg.className = "form-error";
          errorMsg.innerText = message;
          input.parentNode.appendChild(errorMsg);
        } else {
          error.innerText = message;
        }
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        if (error && error.classList.contains("form-error")) {
          error.remove();
        }
      }
    }

    // Validate first name
    validateField(firstName, firstName.value.trim().length >= 5, "First name must be at least 5 characters");

    // Validate email if filled
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
    validateField(email, email.value === "" || emailPattern.test(email.value), "Email must be gmail.com or yahoo.com");

    // Validate card number
    cardNumber.type = "number"; // Ensure field is of type number
    validateField(cardNumber, /^\d{16,16}$/.test(cardNumber.value), "Card number must be at least 16 digits");

    // Optionally: validate other required fields
    const requiredFields = form.querySelectorAll("input[required], select[required]");
    requiredFields.forEach(input => {
      validateField(input, input.value.trim() !== "", `${input.previousElementSibling?.innerText || "This field"} is required`);
    });

    // Submit the form if valid
    if (isValid) {
      form.submit();
      alert("Thank You. Form Submibmeted Successfully.");
    }
    
    return false;
  }