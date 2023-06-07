const inputName = document.querySelector('#idName');
const inputLastName = document.querySelector('#idLastName');
const inputEmail = document.querySelector('#idEmail');
const inputPassword = document.querySelector('#idPassword');
const inputConfirmPassword = document.querySelector('#idConfirmPassword');

const labelName = document.querySelector("label[for='idName']");
const labelLastName = document.querySelector("label[for='idLastName']");
const labelEmail = document.querySelector("label[for='idEmail']");
const labelPassword = document.querySelector("label[for='idPassword']");
const labelConfirmPassword= document.querySelector("label[for='idConfirmPassword']");


const submitButton = document.getElementById("btnSubmit");

const greenColor = "color:#00CC00";
const redColor = "color:#990000";

let isNameValidated = false;
let isLastNameValidated = false;
let isEmailValidated = false;
let isEmailValid;
let isPasswordValidated = false;
let isConfirmPasswordValidated = false;

function tryValidate() {
    const errorMessages = [];
  
    nameValidation();
    lastNameValidation();
    emailValidation();
    passwordValidation();
    confirmPasswordValidation();
  
    if (!isNameValidated) {
      errorMessages.push("O Nome está inválido.");
    }
    if (!isLastNameValidated) {
      errorMessages.push("O último nome está inválido.");
    }
    if (!isEmailValidated) {
      errorMessages.push("O Email está inválido.");
    }
    if (!isPasswordValidated) {
      errorMessages.push("A senha está inválida.");
    }
    if (!isConfirmPasswordValidated) {
      errorMessages.push("A confirmação de senha está inválida.");
    }
  
    if (errorMessages.length === 0) {
      alert("Formulário válido. Submissão permitida.");
    } else {
      const errorMessage = errorMessages.join("\n");
      alert(errorMessage);
    }
  }

function nameValidation(){

    if(inputName.value.length >=5){
        labelName.setAttribute("style", String(greenColor));
        isNameValidated = true
    }
    else{
        labelName.setAttribute("style", String(redColor))
        isNameValidated = false
    }
}

inputName.addEventListener("keyup", () => nameValidation());

function lastNameValidation(){

    if(inputLastName.value.length >=5){
        labelLastName.setAttribute("style", String(greenColor));
        isLastNameValidated = true
    }
    else{
        labelLastName.setAttribute("style", String(redColor))
        isLastNameValidated = false
    }
}

inputLastName.addEventListener("keyup", () => lastNameValidation());

function emailValidation(){

    isEmailValid = inputEmail.value.includes("@");

        if (isEmailValid === true){
            labelEmail.setAttribute("style", String(greenColor))
            isEmailValidated = true
        }
        else{
            labelEmail.setAttribute("style", String(redColor))
            isEmailValidated = false
        }
    }
    
inputEmail.addEventListener("keyup", () => emailValidation());

function passwordValidation(){

    if(inputPassword.value.length >=5 && inputPassword.value.length <= 8){
        labelPassword.setAttribute("style", String(greenColor));
        isPasswordValidated = true
    }
    else{
        labelPassword.setAttribute("style", String(redColor))
        isPasswordValidated = false
    }
}

inputPassword.addEventListener("keyup", () => passwordValidation());

function confirmPasswordValidation(){

    if(inputConfirmPassword.value.length >=5 && inputConfirmPassword.value.length <= 8 && inputConfirmPassword.value === inputPassword.value){
        labelConfirmPassword.setAttribute("style", String(greenColor));
        isConfirmPasswordValidated = true
    }
    else{
        labelConfirmPassword.setAttribute("style", String(redColor))
        isConfirmPasswordValidated = false
    }
}

inputConfirmPassword.addEventListener("keyup", () => confirmPasswordValidation());

submitButton.addEventListener("click", tryValidate);