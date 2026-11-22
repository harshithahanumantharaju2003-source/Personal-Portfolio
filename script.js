// Function for Say Hello button
function showMessage() {
alert("Thank you for visiting my portfolio! Have a wonderful day!");
}

// Display current year in footer
const footer = document.querySelector("footer p");

footer.textContent = "© " + new Date().getFullYear() +
" Personal Portfolio Website | All Rights Reserved";
// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});