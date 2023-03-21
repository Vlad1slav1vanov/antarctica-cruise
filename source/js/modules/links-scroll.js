const benefitsLink = document.getElementById("benefits-link");
const benefitsBlock = document.getElementById("benefits");

const cruisesLink = document.getElementById("cruises-link");
const cruisesBlock = document.getElementById("cruises");

const contactsLink = document.getElementById("contacts-link");
const contactsBlock = document.getElementById("contacts");

const scrollEvt = (block, link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    block.scrollIntoView({behavior: "smooth"})
  })
}

scrollEvt(benefitsBlock, benefitsLink)
scrollEvt(cruisesBlock, cruisesLink)
scrollEvt(contactsBlock, contactsLink)
