let myHover3D = new Hover3D(".profile-img-wrapper");

const hamburgerButton = document.getElementById("hamburger-button");
const header = document.getElementsByTagName("header")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];
const form = document.getElementsByTagName("form")[0];
const inputName = form[0];
const inputEmail = form[1];
const inputPhone = form[2];
const inputSubject = form[3];
const inputMessage = form[4];
const errorName = document.getElementsByClassName("error-name")[0];
const errorEmail = document.getElementsByClassName("error-email")[0];
const errorMessage = document.getElementsByClassName("error-area")[0];
const loader = document.getElementsByClassName("loader")[0];
const emailModal = document.getElementsByClassName("email-modal")[0];
const closeModalButton = document.getElementById("close-modal-button");
const emailModalFailure = document.getElementsByClassName(
  "email-modal-failure"
)[0];
const closeModalFailure = document.getElementById("close-modal-failure");

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateForm()) return;
  else {
    loader.style.display = "block";
    Email.send({
      SecureToken: "62e82d2a-60f9-479a-9d91-3ee4219a6b61",
      To: "petar@petardev.com",
      From: inputEmail.value,
      Subject: inputSubject.value ? inputSubject.value : "",
      Body: inputMessage.value,
    })
      .then((message) => {
        emailModal.style.display = "block";
      })
      .catch((error) => {
        emailModalFailure.style.display = "block";
      })
      .finally(() => {
        loader.style.display = "none";
      });
  }
});

closeModalButton.addEventListener("click", function () {
  emailModal.style.display = "none";
  form.reset();
});

closeModalFailure.addEventListener("click", function () {
  emailModalFailure.style.display = "none";
  form.reset();
});

function validateRequiredField(input, errorMessage) {
  if (!input.value) {
    errorMessage.innerHTML = "This field is required.";
    errorMessage.style.display = "block";
    input.style.border = "solid .05rem red";
    return false;
  } else {
    input.style.border = "solid 0.05rem aliceblue";
    errorMessage.style.display = "none";
    return true;
  }
}

function validateEmailField(input, errorMessage) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(regex)) {
    errorMessage.innerHTML = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    input.style.border = "solid .05rem red";
    return false;
  } else {
    input.style.border = "solid 0.05rem aliceblue";
    errorMessage.style.display = "none";
    return true;
  }
}

function validateForm() {
  let isNameValid = validateRequiredField(inputName, errorName);
  let isMessageValid = validateRequiredField(inputMessage, errorMessage);
  let isEmailValid = validateEmailField(inputEmail, errorEmail);
  return isNameValid && isMessageValid && isEmailValid;
}
