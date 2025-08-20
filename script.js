"use strict";
AOS.init();

const goToTop = document.getElementById("top");
const menuBtn = document.querySelector(".menu-toggle");
const links = document.querySelector(".linkes");
const icons = document.querySelector(".linkes .icons");
const header = document.querySelector("header");
menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  icons.classList.toggle("active");
});
document.onscroll = function () {
  if (scrollY >= 100)
    header.style.cssText =
      "background: linear-gradient( #020617 0%, #0a0f1f 50%, #020617 100%);   opacity: 0.95;";

  if (scrollY >= 450) goToTop.classList.add("active");
  else goToTop.classList.remove("active");
};

goToTop.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
