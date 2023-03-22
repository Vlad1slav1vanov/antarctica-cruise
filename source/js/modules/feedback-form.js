import { initPhoneInput } from "./form-validate/init-phone-input";
import { Validator } from "./form-validate/validator";

const formCheckbox = document.getElementById("form-checkbox");
const accessCheckbox = document.getElementById("access-checkbox");
const validator = new Validator();

formCheckbox.addEventListener("click", () => {
  accessCheckbox.click();
})

const phoneParent = document.querySelector(".feedback-form__phone-wrapper")
const phoneInput = document.getElementById("phone-input");
const form = document.querySelector(".feedback-form");

initPhoneInput(phoneParent);

form.addEventListener("submit", (evt) => {
  const isValid = validator._validatePhoneInput(phoneParent, phoneInput);
  if (!isValid) {
    evt.preventDefault();
    phoneInput.focus();
  }
});
