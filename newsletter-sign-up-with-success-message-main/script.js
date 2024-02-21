"use strict";

// let result = input.includes("@gmail.com");

const input = document.getElementById("EmailTxt");
const button = document.getElementById("login");
const alertEL = document.querySelector(".Email");
button.addEventListener("click", (e) => {
  let messages = [];
  if (input.value === "" || input.value == null) {
    messages.push("Email is required");
  }
  if (messages.length > 0) {
    e.preventDefault(input);
    alertEL.innerText = messages.join(", ");
  }
});

// function subBtn() {
//   if (input === "") {
//     alert.textContent = "you did not write email";
//   }
//   else if(input !== "") {
//     alert.textContent = "Email address";
//   }
// }

// window.open("message.html")
//   if (result !== true) {
//     alert.textContent = "wrong email";
//     console.log(result);
//   } else if ((result == true)) {
//     console.log(result);
//   }
