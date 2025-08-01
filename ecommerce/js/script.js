// for date & time 
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

//alert after form submit
// function submitForm() {
//     alert("Thank You. Form Successfully Submited.");
// }

function submitForm() {
    const phone = document.getElementById('inputPhone').value.trim();
    const email = document.getElementById('inputEmail').value.trim();

    // Validate phone: must be exactly 11 digits
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be numeric and exactly 11 digits.");
        return false;
    }

    // Validate email: must be from gmail.com or yahoo.com
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
        alert("Email must be a valid gmail.com or yahoo.com address.");
        return false;
    }

    alert("Thank You. Form Successfully Submited.");
    
    // All validations passed
    return true;
}