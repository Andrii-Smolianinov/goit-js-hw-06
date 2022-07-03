const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientListEl = document.querySelector("#ingredients");
ingredientListEl.style.listStyleType = "none";
const newCreatedElementsEl = ingredients.map((args) => {
  const listUnit = document.createElement("li");
  listUnit.classList.add("item");
  listUnit.textContent = args;

  return listUnit;
});

ingredientListEl.append(...newCreatedElementsEl);

