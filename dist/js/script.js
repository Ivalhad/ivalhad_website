// navbar fix

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxySUN27nPWjKlHBu9YPb7B32knmO6vTsPyir-335-9u-33RMTrMVLVqP9ybDRToXhhVA/exec";
const form = document.forms["ivalhad-web-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".myAlert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      myAlert.classList.toggle("hidden");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
