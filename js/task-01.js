const howManyCategoriesEl = document.querySelectorAll(".item");
const findTitleEl = document.querySelectorAll("h2");

console.log("Number of categories:", howManyCategoriesEl.length);

let howManyElements;
const screenOutput = (numberCategory) => {
  howManyElements = howManyCategoriesEl[numberCategory].querySelectorAll("li");
  console.log("Category:", findTitleEl[numberCategory].textContent);
  
  console.log("Elements:", howManyElements.length);
  return '';
};

console.log(screenOutput(0));
console.log(screenOutput(1));
console.log(screenOutput(2));

//*2 спосіб не через ф-цію
// console.log("Category:", findTitle[0].textContent);
// const itemAnimals = howManyCategories[0].querySelectorAll("li");
// console.log("Elements:", itemAnimals.length);

// console.log("Category:", findTitle[1].textContent);
// const itemProducts = howManyCategories[1].querySelectorAll("li");
// console.log("Elements:", itemProducts.length);

// console.log("Category:", findTitle[2].textContent);
// const itemTechnologies = howManyCategories[2].querySelectorAll("li");
// console.log("Elements:", itemTechnologies.length);
