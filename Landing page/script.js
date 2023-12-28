import { menuItems } from "./constants";
import { sliderData } from "./sliderData";

const burger = document.querySelector(".burger");
const navElements = document.querySelector("ul");
const displayMenuItems = document.querySelector(".container-menu-items");
const btnBreakfast = document.querySelector(".btn-breakfast");
const btnLunch = document.querySelector(".btn-lunch");
const btnDinner = document.querySelector(".btn-dinner");

burger.addEventListener("click", function () {
  navElements.classList.toggle("showNav");
  burger.classList.toggle("stylized");
});
function generateMenu(menuItems) {
  return menuItems
    .map(
      (item) =>
        `
    <div class="meals">
     <img src="${item.photo}" id="img"alt="${item.photo}"/>
      <h3 class="menuTitle">${item.name}</h3>
      <p class="menuIngredients">${item.ingredients}</p>
      <p class="menuPrice">${item.price}</p>
    </div>
  `
    )
    .join("");
}
function removeClass() {
  btnLunch.classList.remove("up");
  btnDinner.classList.remove("up");
  btnBreakfast.classList.remove("up");
}
btnBreakfast.addEventListener("click", function () {
  displayMenuItems.innerHTML = generateMenu(menuItems.slice(0, 2));
  removeClass();
  btnBreakfast.classList.toggle("up");
});
btnLunch.addEventListener("click", function () {
  displayMenuItems.innerHTML = generateMenu(menuItems.slice(2, 4));
  removeClass();
  btnLunch.classList.toggle("up");
});
btnDinner.addEventListener("click", function () {
  removeClass();
  displayMenuItems.innerHTML = generateMenu(menuItems.slice(4, 6));
  btnDinner.classList.toggle("up");
});

function generateSlider(sliderData) {
  return sliderData.map((element) => `<div>${element.title}</div>`);
}
console.log(generateSlider);

// Slider
const sliders = document.querySelectorAll(".slider-child");
const prevBtn = document.querySelector(".prevSlider");
const nextBtn = document.querySelector(".nextSlider");
let counter = 0;
nextBtn.addEventListener("click", function () {
  if (counter < sliders.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  updateSlider(counter);
  // sliders.forEach((slide) => {
  //   slide.style.transform = `translateX(${-100}%)`;
  // });
});
prevBtn.addEventListener("click", function () {
  if (counter > sliders.length - 1) {
    counter--;
  } else {
    counter = sliders.length - 1;
  }

  updateSlider(counter);
});

function updateSlider(counter) {
  sliders.forEach((slide) => {
    slide.style.transform = `translateX(${-counter * 100}%)`;
  });
}
