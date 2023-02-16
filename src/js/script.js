const menuBtn = document.querySelector(".main-header__burger-btn");
const menu = document.querySelector(".main-header__menu");
menuBtn.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  for (const i of target.children) {
    i.classList.toggle("main-header__brgrbtnsvg--hidden");
  }
  menu.classList.toggle("main-header__menu--show");
});
