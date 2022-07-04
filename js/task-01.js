const howManyCategoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", howManyCategoriesEl.length);

const findTitleEl = howManyCategoriesEl.forEach((value) => {
  console.log("Category:", value.querySelector("h2").textContent);
  console.log("Elements:", value.querySelectorAll("li").length);
});

