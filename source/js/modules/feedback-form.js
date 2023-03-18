const formCheckbox = document.getElementById("form-checkbox");
const accessCheckbox = document.getElementById("access-checkbox");

formCheckbox.addEventListener("click", () => {
  accessCheckbox.click();
})