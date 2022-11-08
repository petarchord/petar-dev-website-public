let myHover3D = new Hover3D(".profile-img-wrapper");

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

document.addEventListener("DOMContentLoaded", function (event) {
  let animations = [
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp animate__delay-1s",
    "animate__animated animate__fadeInUp animate__delay-2s",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
    "animate__animated animate__fadeInUp",
  ];
  document.addEventListener("scroll", function (event) {
    const animatedElements =
      document.getElementsByClassName("animated-element");
    const windowOffsetTop = window.innerHeight + window.scrollY;

    console.log("animatedElements:", animatedElements);

    Array.prototype.forEach.call(animatedElements, function (element, index) {
      const animatedElementOffset = element.offsetTop;

      if (windowOffsetTop >= animatedElementOffset) {
        addClass(element, animations[index]);
      }
    });
  });
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
    element.className += " " + className;
  }
}
