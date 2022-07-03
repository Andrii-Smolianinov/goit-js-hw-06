const spanEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

const onSpanChangeFontSizeEvent = (event) => {
  spanEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", onSpanChangeFontSizeEvent);
