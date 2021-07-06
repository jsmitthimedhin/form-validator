const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Using constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value) {
        passwordMatch = true;
        password2El.style.borderColor = 'green';
        password1El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    
    // Change styling if passwords match and form is filled out
    if(isValid && passwordMatch) {
        message.textContent = 'Thank you for filling out the form!'
        message.style.color = 'blue';
        messageContainer.style.borderColor = 'blue';
        storeFormData();
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }

    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Method to validate form
    validateForm();
}
// Event Listeners
form.addEventListener('submit', processFormData);