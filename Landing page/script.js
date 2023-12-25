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
];
const burger = document.querySelector(".burger");
const navElements = document.querySelector("ul");

burger.addEventListener("click", function () {
  navElements.classList.toggle("showNav");
  burger.classList.toggle("stylized");
});
