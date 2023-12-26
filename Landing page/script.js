const menuItems = [
  {
    name: "Magnem Tirste",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$4.95",
  },
  {
    name: "Aut Luia",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$14.95",
  },
  {
    name: "Est Eligendi",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$8.95",
  },
  {
    name: "Eos salad fourth",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$7.45",
  },
  {
    name: "Eos liubustam",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$12.95",
  },
  {
    name: "Laboroisam devida",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$8.95",
  },
];
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
    <div>
      <h3>${item.name}</h3>
      <p>${item.ingredients}</p>
      <p>${item.price}</p>
    </div>
  `
    )
    .join("");
}
btnBreakfast.addEventListener("click", function () {
  displayMenuItems.innerHTML = generateMenu(menuItems.slice(0, 2));
  btnBreakfast.classList.toggle("up");
});
btnLunch.addEventListener("click", function () {
  displayMenuItems.innerHTML = generateMenu(menuItems.slice(2, 4));
  btnLunch.classList.toggle("up");
});
