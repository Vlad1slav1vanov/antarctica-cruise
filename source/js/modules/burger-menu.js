const burgerButton = document.querySelector(".header__burger-button");
const menu = document.querySelector(".header__main-navigation");
const list = menu.querySelector(".main-navigation__list");
const logo = document.querySelector(".header__main-logo");
const body = document.querySelector("body");

const toggleMenu = () => {
  burgerButton.classList.toggle("is-open")
  menu.classList.toggle("is-open")
  logo.classList.toggle("is-open")

  if (menu.classList.contains("is-open")) {
    body.style.maxHeight = "100vh"
    body.style.overflowY = "hidden"
  } else {
    body.style.height = "100%"
    body.style.overflowY = "visible"
  }
}

const closeMenu = () => {
  burgerButton.classList.remove("is-open")
  menu.classList.remove("is-open")
  logo.classList.remove("is-open")
}

menu.addEventListener("click", closeMenu)

list.addEventListener("click", (evt) => {
  evt.stopPropagation()
})

burgerButton.addEventListener("click", toggleMenu)
