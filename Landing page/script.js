const burger = document.querySelector(".burger");
const navElements = document.querySelector("ul");

burger.addEventListener("click", function () {
  navElements.classList.toggle("showNav");
  burger.classList.toggle("stylized");
});
