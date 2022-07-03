const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector("#email");
const inputPasswordEl = document.querySelector("#password");
const buttonSubmitEl = document.querySelector("#submit");

function onFormSubmit(event) {
  event.preventDefault();
  const formElementsEl = event.currentTarget.elements;
  const mail = formElementsEl.email.value;
  const password = formElementsEl.password.value;
  if ((mail && password) === "") {
    return alert("Увага!!! Всі поля повинні бути заповнені");
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);

  formEl.reset();
}

formEl.addEventListener("submit", onFormSubmit);
