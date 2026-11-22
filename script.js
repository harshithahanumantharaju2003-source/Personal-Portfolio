// Function for Say Hello button
function showMessage() {
alert("Thank you for visiting my portfolio! Have a wonderful day!");
}

// Display current year in footer
const footer = document.querySelector("footer p");

footer.textContent = "© " + new Date().getFullYear() +
" Personal Portfolio Website | All Rights Reserved";