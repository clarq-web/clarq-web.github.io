//checkbox-toggle
const toggle = document.getElementById("mode-toggle");
const nctc = document.querySelectorAll(".noncontac");
const txt = document.querySelectorAll("h1, p, li, h4, h2");
const bckgrnd = document.querySelectorAll("header, section, footer");
const lg = document.querySelectorAll(".logo");

toggle.addEventListener("change", function () {
    if (toggle.checked) {
      nctc.forEach((element) => {
        element.classList.add("txt-drk");
      });
      txt.forEach((element) => {
        element.classList.add("txt-drk");
      });
      bckgrnd.forEach((element) => {
        element.classList.add("bck-drk");
      });
      lg.forEach((element) => {
        element.innerHTML = "<img src=/media/wlogo.svg alt=logoheader>";
      });
    } else {
      nctc.forEach((element) => {
        element.classList.remove("txt-drk");
      });
      txt.forEach((element) => {
        element.classList.remove("txt-drk");
      });
      bckgrnd.forEach((element) => {
        element.classList.remove("bck-drk");
      });
      lg.forEach((element) => {
        element.innerHTML = "";
        element.innerHTML = "<img src=/media/blogo.svg alt=logoheader>";
      });
    }
});
