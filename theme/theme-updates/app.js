const children = document.querySelectorAll(".ast-marketing-template");
const parents = [];

children.forEach((child) => {
  const parent = child.closest("li");
  parents.push(parent);
});

parents.forEach((parent) => {
  parent.classList.add("ast-marketing-shadow");
});
console.log(parents);
