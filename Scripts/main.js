const inputName = document.querySelector('#idName');
const inputLastName = document.querySelector('#idLastName');
const inputEmail = document.querySelector('#idEmail');
const inputPassword = document.querySelector('#idPassword');
const inputConfirmPassword = document.querySelector('#idConfirmPassword');
const inputTel = document.querySelector('#idTel');
const inputCel = document.querySelector('#idCel');
const inputCEP = document.querySelector('#idCEP');
const inputEnd = document.querySelector('#idEnd');
const inputNmr = document.querySelector('#idNmr');

const labelName = document.querySelector("label[for='idName']");
const labelLastName = document.querySelector("label[for='idLastName']");
const labelEmail = document.querySelector("label[for='idEmail']");
const labelPassword = document.querySelector("label[for='idPassword']");
const labelConfirmPassword = document.querySelector("label[for='idConfirmPassword']");
const labelTel = document.querySelector("label[for='idTel']");
const labelCel = document.querySelector("label[for='idCel']");
const labelCEP = document.querySelector("label[for='idCEP']");
const labelEnd = document.querySelector("label[for='idEnd']");
const labelNmr = document.querySelector("label[for='idNmr']");

const submitButton = document.getElementById("btnSubmit");

const greenColor = "color:#00CC00";
const redColor = "color:#990000";

let isNameValidated = false;
let isLastNameValidated = false;
let isEmailValidated = false;
let isEmailValid;
let isPasswordValidated = false;
let isConfirmPasswordValidated = false;
let isTelValidated = false;
let isCelValidated = false;
let isCEPValidated = false;
let isEndValidated = false;
let isNmrValidated = false;

function tryValidate() {
  const errorMessages = [];

  nameValidation();
  lastNameValidation();
  emailValidation();
  passwordValidation();
  confirmPasswordValidation();
  TelValidation();
  CelValidation();
  CEPValidation();
  EndValidation();
  NmrValidation();

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
  if (!isTelValidated) {
    errorMessages.push("O Telefone está inválido.");
  }
  if (!isCelValidated) {
    errorMessages.push("O Celular está inválido.");
  }
  if (!isCEPValidated) {
    errorMessages.push("O CEP está inválido.");
  }
  if (!isEndValidated) {
    errorMessages.push("O endereço está inválido.");
  }
  if (!isNmrValidated) {
    errorMessages.push("O numero da casa está inválido.");
  }

  if (errorMessages.length === 0) {
    alert("Formulário válido. Submissão permitida.");
  } else {
    const errorMessage = errorMessages.join("\n");
    alert(errorMessage);
  }
}

function containsWhitespace(str) {
  return /\s/.test(str);
}

function nameValidation() {
  if (inputName.value.trim().length >= 3 && !containsWhitespace(inputName.value)) {
    labelName.setAttribute("style", `${greenColor}`);
    isNameValidated = true;
  } else {
    labelName.setAttribute("style", `${redColor}`);
    isNameValidated = false;
  }
}

inputName.addEventListener("keyup", nameValidation);

function lastNameValidation() {
  if (inputLastName.value.trim().length >= 3 && !containsWhitespace(inputLastName.value)) {
    labelLastName.setAttribute("style", `${greenColor}`);
    isLastNameValidated = true;
  } else {
    labelLastName.setAttribute("style", `${redColor}`);
    isLastNameValidated = false;
  }
}

inputLastName.addEventListener("keyup", lastNameValidation);

function emailValidation() {
    isEmailValid = inputEmail.value.includes("@");
  
    if (inputEmail.value.trim().length >= 5 && !containsWhitespace(inputEmail.value) && isEmailValid) {
      labelEmail.setAttribute("style", `${greenColor}`);
      isEmailValidated = true;
    } else {
      labelEmail.setAttribute("style", `${redColor}`);
      isEmailValidated = false;
    }
  }
  
  inputEmail.addEventListener("keyup", emailValidation);

function passwordValidation() {
  if (inputPassword.value.trim().length >= 5 && inputPassword.value.trim().length <= 8 && !containsWhitespace(inputPassword.value)) {
    labelPassword.setAttribute("style", `${greenColor}`);
    isPasswordValidated = true;
  } else {
    labelPassword.setAttribute("style", `${redColor}`);
    isPasswordValidated = false;
  }
}

inputPassword.addEventListener("keyup", passwordValidation);

function confirmPasswordValidation() {
  if (inputConfirmPassword.value.trim().length >= 5 && !containsWhitespace(inputConfirmPassword.value)) {
    labelConfirmPassword.setAttribute("style", `${greenColor}`);
    isConfirmPasswordValidated = true;
  } else {
    labelConfirmPassword.setAttribute("style", `${redColor}`);
    isConfirmPasswordValidated = false;
  }
}

inputConfirmPassword.addEventListener("keyup", confirmPasswordValidation);

function TelValidation() {
  if (inputTel.value.trim().length >= 8 && !containsWhitespace(inputTel.value)) {
    labelTel.setAttribute("style", `${greenColor}`);
    isTelValidated = true;
  } else {
    labelTel.setAttribute("style", `${redColor}`);
    isTelValidated = false;
  }
}

inputTel.addEventListener("keyup", TelValidation);

function CelValidation() {
  if (inputCel.value.trim().length >= 8 && !containsWhitespace(inputCel.value)) {
    labelCel.setAttribute("style", `${greenColor}`);
    isCelValidated = true;
  } else {
    labelCel.setAttribute("style", `${redColor}`);
    isCelValidated = false;
  }
}

inputCel.addEventListener("keyup", CelValidation);

function CEPValidation() {
  if (inputCEP.value.trim().length >= 8 && !containsWhitespace(inputCEP.value)) {
    labelCEP.setAttribute("style", `${greenColor}`);
    isCEPValidated = true;
  } else {
    labelCEP.setAttribute("style", `${redColor}`);
    isCEPValidated = false;
  }
}

inputCEP.addEventListener("keyup", CEPValidation);

function EndValidation() {
  if (inputEnd.value.trim().length >= 4 && !containsWhitespace(inputEnd.value)) {
    labelEnd.setAttribute("style", `${greenColor}`);
    isEndValidated = true;
  } else {
    labelEnd.setAttribute("style", `${redColor}`);
    isEndValidated = false;
  }
}

inputEnd.addEventListener("keyup", EndValidation);

function NmrValidation() {
  if (inputNmr.value.trim().length >= 1 && !containsWhitespace(inputNmr.value)) {
    labelNmr.setAttribute("style", `${greenColor}`);
    isNmrValidated = true;
  } else {
    labelNmr.setAttribute("style", `${redColor}`);
    isNmrValidated = false;
  }
}

inputNmr.addEventListener("keyup", NmrValidation);

submitButton.addEventListener("click", tryValidate);
