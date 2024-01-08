const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  if (menu.className.includes("nav-open")) {
    menu.classList.remove("nav-open");
  } else {
    menu.classList.add("nav-open");
  }
});
