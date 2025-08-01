// create a function to update the date and time
function updateDateTime() {
// create a new `Date` object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

// update the `textContent` property of the `span` element with the `id` of `datetime`
document.querySelector('#datetime').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);

//form validation
function formValidation() {
    const email = document.getElementById('inputEmail').value.trim();
    const phone = document.getElementById('inputPhone').value.trim();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
        alert('Email must be a valid Gmail or Yahoo address.');
        return false;
    }

    // Phone number validation
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be exactly 11 digits.');
        return false;
    }

    // Success message
    alert('Form submitted successfully!');
    return true;
}