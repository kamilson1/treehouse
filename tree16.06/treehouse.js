let btnh = document.querySelector(".hero--btn");
btnh.type = "submit";
btnh.name = "formBtn";
btnh.addEventListener("click", function () {
  alert("chuj ci w dupę frajerze");
});

const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__ul");

hamBurger.addEventListener("click", function () {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__a").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
