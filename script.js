
window.addEventListener("scroll", () =>{
    const header = document.querySelector(".header")
    header.classList.toggle("scrolled",window.scrollY>50)
});

// const header = document.querySelector("header");

// window.addEventListener ("scroll", function() {
//     header.classList.toggle ("sticky", window.scrollY >0);
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });

  // Optional: close menu on scroll
  window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// 

const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("active", window.scrollY > 300);
});
