let counterValueEl = document.querySelector("#value");
let clickCounter = 0;

const upButtonEl = document.querySelector('button[data-action="decrement"]');
const downButtonEl = document.querySelector('button[data-action="increment"]');

const onUpButtonClickEvent = (event) => {
  clickCounter -= 1;
  counterValueEl.innerHTML = clickCounter;
};

const onDownButtonClickEvent = (event) => {
  clickCounter += 1;
  counterValueEl.innerHTML = clickCounter;
};

upButtonEl.addEventListener("click", onUpButtonClickEvent);
downButtonEl.addEventListener("click", onDownButtonClickEvent);
