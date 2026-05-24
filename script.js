const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1500);

});

/* CART ANIMATION */

const buttons = document.querySelectorAll(".info button");

buttons.forEach(button => {

button.addEventListener("click", () => {

button.innerHTML = "Added ✓";

button.style.background = "#00ff99";

setTimeout(() => {

button.innerHTML = "Add To Cart";

button.style.background = "white";

}, 2000);

});

});