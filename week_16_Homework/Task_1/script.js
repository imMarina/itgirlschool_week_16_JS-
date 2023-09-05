// DOM
const main = document.querySelector(".main-container");
const formOne = main.querySelector("#formOne");
const formTwo = main.querySelector("#formTwo");
const formThree = main.querySelector("#formThree");
const emailElem = main.querySelector("#email");
const passwordElem = main.querySelector("#password");
const repeatPasswordElem = main.querySelector("#repeatPassword");
const submitBtn = main.querySelector(".btn");

// Checking of all the elements
// console.log(main, formOne, formTwo, formThree, emailElem, passwordElem, repeatPasswordElem, submitBtn);

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
let collection = document.forms;
console.log(collection);

let username = collection.formOne.name;
let email = collection.formOne.email;
let radioBtn = collection.formOne.gender;
let selectOption = collection.formOne.professions;
let password = collection.formTwo.password;
let repeatPassword = collection.formTwo.repeatPassword;
let checkbox = collection.formThree.agreement;
let submit = collection.formThree.submit;

// Checking of all the elements
// console.log(username, email, radioBtn, selectOption, password, repeatPassword, checkbox, submit);


collection.formThree.addEventListener("submit", (event) => {
    event.preventDefault();

    textErrorName.textContent = "";
    textErrorEmail.textContent = "";
    textErrorPassword.textContent = "";
    textErrorRepeatPassword.textContent = "";
    // textErrorSelect.textContent = "";

    let valueEmail = email.value;
    let valuePassword = password.value;
	let valueRepeatPassword = repeatPassword.value;
    // console.log(valueEmail, valuePassword, valueRepeatPassword);

    if (username.value == "") {
        textErrorName.textContent = "Please enter your name";
    }

    if (email.value) {
        const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        const validEmail = regEmail.test(valueEmail);
        console.log(validEmail);
            if (!validEmail) {
                textErrorEmail.textContent = "Missing the '@' symbol and the domain name";
            }
    } else {
        textErrorEmail.textContent = "Please enter your email";
    }

    if (radioBtn.checked) {
		console.log("Button selected");
	} else {
		textErrorGender.innerHTML = "Button not selected";
		console.log("Button not selected");
	}

    if (!selectOption.selected) {
        textErrorSelect.textContent = "Please select a profession";
    }

    if (valuePassword) {
        const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        const validPassword = regPassword.test(valuePassword);
        console.log(validPassword);
            if (!validPassword) {
                textErrorPassword.textContent = "Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, 1 number";
            }
    } else {
        textErrorPassword.textContent = "Please enter your password";
    }

    if (!valueRepeatPassword) {
        textErrorRepeatPassword.textContent = "Please repeat your password";
    }

    if (checkbox.checked === true) {
		console.log("Button selected");
	} else {
		textErrorCheckbox.innerHTML = "Button not selected";
		console.log("Button not selected");
	}

});


// To get value of password in current time
passwordElem.addEventListener("input", (event) => {
    textErrorPassword.textContent = event.target.value;
});





