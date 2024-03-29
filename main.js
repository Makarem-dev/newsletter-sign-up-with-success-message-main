"use strict";

const input = document.getElementById("EmailTxt");
const button = document.getElementById("login");
const alertEL = document.querySelector(".Email");

input.addEventListener("input", () => {
  validateForm(input.value);
});

button.addEventListener("click", () => {
  const isValid = validateForm(input.value);

  if (isValid) {
    window.location.href = `message.html?email=${input.value}`;
    // window.open("message.html");
  }
});

const validateForm = function (inputValue) {
  let errorMessages = [];

  if (inputValue === "") {
    errorMessages.push("Email is required");
  }

  if (!inputValue.includes("@gmail.com")) {
    errorMessages.push("Email is invalid");
  }

  if (inputValue.includes(".ir")) {
    errorMessages.push("Iran is not valid");
  }

  if (errorMessages.length > 0) {
    alertEL.innerText = errorMessages.join(", ");
    button.style.filter = "grayscale(1)";
    button.disabled = true;

    return false;
  } else {
    alertEL.innerText = "Email address";
    button.style.filter = "grayscale(0)";
    button.disabled = false;
    return true;
  }
};
