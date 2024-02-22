"use strict";
const emailContainerEl = document.querySelector("#email-container");
const searchParams = new URLSearchParams(window.location.search);
emailContainerEl.innerHTML = searchParams.get("email");

const dismissBtn = document.getElementById("Dismiss");
dismissBtn.addEventListener("click", () => {
  window.location.href = `index.html`;
});
