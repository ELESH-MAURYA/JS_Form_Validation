// validate Form
let validateForm = () => {

    let isFormValid = validateUserName()
                      && validateEmail()
                      && validatePassword()
                      && validateConfirmPassword()
                      && validatePasswordMatch(); // all fields validation

    if(isFormValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }
};

// username validation
let validateUserName = () => {
    let usernameField = document.querySelector('#username');
    if (usernameField.value === '') {
        applyColors(usernameField,'red');
        displayErrorMessage('UserName is Required');
        return false;
    }
    else if(usernameField.value.length < 5){
        applyColors(usernameField,'red');
        displayErrorMessage('Enter at least 5 letters');
        return false;
    }
    else if(!usernameField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(usernameField,'red');
        displayErrorMessage('No Special Characters!');
        return false;
    }
    else {
        applyColors(usernameField,'limegreen');
        return true;
    }
};

// email validation
let validateEmail = () => {
    let emailField = document.querySelector('#email');
    if (emailField.value === '') {
        applyColors(emailField,'red');
        displayErrorMessage('Email is Required');
        return false;
    }
    else {
        applyColors(emailField,'green');
        return true;
    }
};

// Password validation
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    if (passwordField.value === '') {
        applyColors(passwordField,'red');
        displayErrorMessage('Password is Required');
        return false;
    }
    else if(passwordField.value.length < 5){
        applyColors(passwordField,'red');
        displayErrorMessage('Enter at least 5 letters');
        return false;
    }
    else if(!passwordField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(passwordField,'red');
        displayErrorMessage('No Special Characters!');
        return false;
    }
    else {
        applyColors(passwordField,'green');
        return true;
    }
};

// Confirm Password validation
let validateConfirmPassword = () => {
    let confirmPasswordField = document.querySelector('#c_password');
    if (confirmPasswordField.value === '') {
        applyColors(confirmPasswordField,'red');
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else if(confirmPasswordField.value.length < 5){
        applyColors(confirmPasswordField,'red');
        displayErrorMessage('Enter at least 5 letters');
        return false;
    }
    else if(!confirmPasswordField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(confirmPasswordField,'red');
        displayErrorMessage('No Special Characters!');
        return false;
    }
    else {
        applyColors(confirmPasswordField,'green');
        return true;
    }
};

// Passwords match validation
let validatePasswordMatch = () => {
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if (passwordField.value !== confirmPasswordField.value) {
        applyColors(passwordField,'red');
        applyColors(confirmPasswordField,'red');
        displayErrorMessage('Passwords are NOT Matched');
        return false;
    }
    else {
        applyColors(passwordField,'green');
        applyColors(confirmPasswordField,'green');
        return true;
    }
};

// Apply Colors
let applyColors = (inputField,color) => {
    inputField.style.borderColor = color;
    inputField.style.boxShadow = `0 0 10px ${color}`;
};

// display Error Message
let displayErrorMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    h3Tag.style.backgroundColor = 'red';
    let errorMsgDiv = document.querySelector('#error-msg');
    errorMsgDiv.appendChild(h3Tag);
    setTimeout(removeErrorMessage,2000);
};

// remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};
