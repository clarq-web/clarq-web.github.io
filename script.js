let mqdm = window.matchMedia("(prefers-color-scheme: dark)");

if (mqdm.matches) {
  document.getElementById("mode-toggle").setAttribute("checked", "");
}
