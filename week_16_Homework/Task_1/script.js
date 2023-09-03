// FORMS

let collection = document.forms;
// console.log(collection);
let username = collection.formOne.name;
// console.log(username);
let email = collection.formOne.email;
// console.log(email);
let radioBtn = collection.formOne.gender;
// console.log(radioBtn);
let selectOption = collection.formOne.professions;
// console.log(selectOption);
let password = collection.formTwo.password;
// console.log(password);
let repeatPassword = collection.formTwo.repeatPassword;
// console.log(repeatPassword);
let checkbox = collection.formThree.agreement;
// console.log(checkbox);
let submit = collection.formThree.submit;
// console.log(submit);


// DOM
const form = document.querySelector("form");
const emailElem = form.querySelector("#email");
const passwordElem = form.querySelector("#password");
const repeatPasswordElem = form.querySelector("#repeatPassword");
const submitBtn = form.querySelector(".btn");


// DOM - errors
const textErrorName = form.querySelector("#text-error_1");
const textErrorEmail = form.querySelector("#text-error_2");
const textErrorGender = form.querySelector("#text-error_3");
const textErrorSelect = form.querySelector("#text-error_4");
const textErrorPassword = form.querySelector("#text-error_5");
const textErrorRepeatPassword = form.querySelector("#text-error_6");
const textErrorCheckbox = form.querySelector("#text-error_7");


collection.formThree.addEventListener("submit", (event) => {
    event.preventDefault();

    textErrorName.textContent = "";
    textErrorEmail.textContent = "";
    // textErrorPassword.textContent = "";
    // textErrorRepeatPassword.textContent = "";
	
    if (username.value == "") {
        textErrorName.textContent = "Please enter your name properly";
    }
    if (email.value == "") {
        textErrorEmail.textContent = "Please enter your email properly";
    }
    if (password.value = "") {
        textErrorPassword.textContent = "Please enter your password";
    }
    if (repeatPassword.value = "") {
        textErrorRepeatPassword.textContent = "Please repeat your password";
    }

	if (radioBtn.checked === true) {
		console.log("Button selected");
	} else {
		textErrorGender.innerHTML = "Button not selected";
		console.log("Button not selected");
	}

    if (checkbox.checked === true) {
		console.log("Button selected");
	} else {
		textErrorCheckbox.innerHTML = "Button not selected";
		console.log("Button not selected");
	}

    collection.reset();
  });


