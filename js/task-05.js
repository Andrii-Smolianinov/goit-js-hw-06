const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onSpanEntryNameEvent = (event) => {
  const inputText = event.currentTarget.value;

  if (inputText === "") {
    return (spanEl.textContent = "Anonymous");
  }
  spanEl.textContent = inputText;
};

inputEl.addEventListener("input", onSpanEntryNameEvent);
