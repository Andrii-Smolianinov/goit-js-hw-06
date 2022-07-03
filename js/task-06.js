const inputEl = document.querySelector("#validation-input");
const quantity = Number(inputEl.dataset.length);

const onInputChecksCharactersEvent = (event) => {
  const lengthInputEl = event.currentTarget.value.length;

  if (lengthInputEl <= quantity) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    return inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputChecksCharactersEvent);
