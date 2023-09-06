// DOM
const main = document.querySelector(".main-container");

// DOM - errors
const textErrorName = main.querySelector("#text-error_1");
const textErrorEmail = main.querySelector("#text-error_2");
const textErrorGender = main.querySelector("#text-error_3");
const textErrorSelect = main.querySelector("#text-error_4");
const textErrorPassword = main.querySelector("#text-error_5");
const textErrorRepeatPassword = main.querySelector("#text-error_6");
const textErrorCheckbox = main.querySelector("#text-error_7");
// Checking of all the elements
// console.log(textErrorName, textErrorEmail, textErrorGender, textErrorSelect, textErrorPassword, textErrorRepeatPassword, textErrorCheckbox);

// FORMS
const collection = document.forms;
// FORMS - elements
const username = collection.formOne.name;
const email = collection.formOne.email;
const password = collection.formTwo.password;
const repeatPassword = collection.formTwo.repeatPassword;


main.addEventListener('submit', function (event) {
    // prevent the form from submitting
    event.preventDefault();
    // Delete errors
    clearError();

    // validate fields
    const valueName = checkUsername();
    const valueEmail = checkEmail();
    const valuePassword = checkPassword();
    const valueRepeatPassword = checkConfirmPassword();

    checkButtons();

});


const checkUsername = () => {
    const min = 2;
    const max = 20;
    const valueName = username.value.trim();

    if (isInputEmpty(valueName)) {
        textErrorName.textContent = "Please enter your name";
    } else if (isLengthMinMax(valueName, min, max)) {
        textErrorName.textContent = `Username must be between ${min} and ${max} characters.`;
    } else {
        textErrorName.classList.remove('text-warning');
        textErrorName.classList.add('text-dark');
        textErrorName.textContent = "Confirmed";
    }

    console.log(valueName);
    return valueName;
}

const checkEmail = () => {
    const valueEmail = email.value.trim();

    if (isInputEmpty(valueEmail)) {
        textErrorEmail.textContent = "Please enter your email";
    } else if (!isValidEmail(valueEmail)) {
        textErrorEmail.textContent = "Missing the '@' symbol and the domain name";
    } else {
        textErrorEmail.classList.remove('text-warning');
        textErrorEmail.classList.add('text-dark');
        textErrorEmail.textContent = "Confirmed";
    }

    console.log(valueEmail);
    return valueEmail;
}

const checkPassword = () => {
    const valuePassword = password.value.trim();

    if (isInputEmpty(valuePassword)) {
        textErrorPassword.textContent = "Please enter your password";

    } else if (!isPasswordSecure(valuePassword)) {
        textErrorPassword.textContent = "Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, 1 number";
    } else {
        textErrorPassword.classList.remove('text-warning');
        textErrorPassword.classList.add('text-dark');
        textErrorPassword.textContent = "Confirmed";
    }

    console.log(valuePassword);
    return valuePassword;
};

const checkConfirmPassword = () => {
    // check confirm password
    const valueRepeatPassword = repeatPassword.value.trim();
    const valuePassword = password.value.trim();

    if (isInputEmpty(valueRepeatPassword)) {
        textErrorRepeatPassword.textContent = "Please repeat your password";
    } else if (valuePassword !== valueRepeatPassword) {
        textErrorRepeatPassword.textContent = "The password does not match";
    } else {
        textErrorRepeatPassword.classList.remove('text-warning');
        textErrorRepeatPassword.classList.add('text-dark');
        textErrorRepeatPassword.textContent = "Confirmed";
    }

    console.log(valueRepeatPassword);
    return valueRepeatPassword;
};

function checkButtons() {
    const radioBtn = collection.formOne.gender;
    const selectOption = collection.formOne.professions;
    const checkbox = collection.formThree.agreement;

    if (radioBtn.value === "") {
        textErrorGender.textContent = "Please select a gender";
    }

    if (selectOption.value === "Default") {
        textErrorSelect.textContent = "Please select a profession";
    }

    if (!checkbox.checked) {
        textErrorCheckbox.textContent = "Please accept the terms and conditions";
    }

    if (radioBtn.value !== "") {
        textErrorGender.classList.remove('text-warning');
        textErrorGender.classList.add('text-dark');
        textErrorGender.textContent = "Button selected";
    }

    if (selectOption.value !== "Default") {
        textErrorSelect.classList.remove('text-warning');
        textErrorSelect.classList.add('text-dark');
        textErrorSelect.textContent = "Button selected";
    }

    if (checkbox.checked) {
        textErrorCheckbox.classList.remove('text-warning');
        textErrorCheckbox.classList.add('text-dark');
        textErrorCheckbox.textContent = "Button selected";
    }

}

// isInputEmpty(value) function returns true if the input argument is empty:
function isInputEmpty(value) {
    return value === "" ? true : false;
}

// isLengthMinMax(value, min, max)  function returns false if the length argument is not between the min and max argument:
function isLengthMinMax(value, min, max) {
    return value.length < min || value.length > max;
}

// To check the email is valid, you’ll use a regular expression:
function isValidEmail(email) {
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const validEmail = regEmail.test(email);

    console.log(validEmail);
    return validEmail;
}

// To check if a password is strong, which match a specified pattern, you’ll also use a regular expression:
function isPasswordSecure(password) {
    const regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    const validPassword = regPassword.test(password);
    
    console.log(validPassword);
    return validPassword;
}

// Delete errors
function clearError() {
    textErrorName.textContent = "";
    textErrorEmail.textContent = "";
    textErrorGender.textContent = ""
    textErrorSelect.textContent = "";
    textErrorPassword.textContent = "";
    textErrorRepeatPassword.textContent = "";
    textErrorCheckbox.textContent = "";
}

/* 
Password RegEx	    Meaning
^	                The password starts
(?=.*[a-z])	        The password must contain at least one lowercase character
(?=.*[A-Z])	        The password must contain at least one uppercase character
(?=.*[0-9])	        The password must contain at least one number
(?=.*[!@#$%^&*])	The password must contain at least one special character
(?=.{8,})	        The password must be eight characters or longer
*/
