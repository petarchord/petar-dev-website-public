console.log("hello!");

let myHover3D = new Hover3D(".profile-img-wrapper");

console.log("my3D:", myHover3D);

const hamburgerButton = document.getElementById("hamburger-button");
console.log("hambButton:", hamburgerButton);
const header = document.getElementsByTagName("header")[0];
console.log("header:", header);
const mobileNav = document.getElementsByClassName("mobile-nav")[0];
console.log("mobile-nav:", mobileNav);

hamburgerButton.addEventListener("click", function () {
  this.classList.toggle("open");
  header.classList.toggle("mobile");
  mobileNav.classList.toggle("visible");
});

mobileNav.addEventListener("click", function () {
  this.classList.toggle("visible");
  hamburgerButton.classList.toggle("open");
  header.classList.toggle("mobile");
});
