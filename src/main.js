const btnEl = document.getElementById("menu-btn");
const menuEl = document.getElementById("menu");

btnEl.classList.remove("open");
menuEl.classList.add("hidden");

btnEl.addEventListener("click", function () {
  btnEl.classList.toggle("open");
  menuEl.classList.toggle("hidden");
  menuEl.classList.toggle("flex");
});
