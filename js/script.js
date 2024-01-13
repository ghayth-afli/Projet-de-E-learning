const btn = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  if (menu.className.includes("nav-open")) {
    menu.classList.remove("nav-open");
  } else {
    menu.classList.add("nav-open");
  }
});

var nbslide = 1;

const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
slide2.classList.add("hide");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  console.log("ok");
  if (nbslide == 1) {
    slide2.classList.remove("hide");
    slide1.classList.add("hide");
    nbslide = 2;
  } else {
    slide1.classList.remove("hide");
    slide2.classList.add("hide");
    nbslide = 1;
  }
});
prev.addEventListener("click", () => {
  if (nbslide == 1) {
    slide2.classList.remove("hide");
    slide1.classList.add("hide");
    nbslide = 2;
  } else {
    slide1.classList.remove("hide");
    slide2.classList.add("hide");
    nbslide = 1;
  }
});

function autoSlide() {
  if (nbslide == 1) {
    slide2.classList.remove("hide");
    slide1.classList.add("hide");
    nbslide = 2;
  } else {
    slide1.classList.remove("hide");
    slide2.classList.add("hide");
    nbslide = 1;
  }
}

// Set interval for automatic slide transitioning
autoSlideInterval = setInterval(autoSlide, 5000);
