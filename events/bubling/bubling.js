let changeColor = document.querySelector("button");
let h2 = document.querySelector("h2");

const makeChangeColor = (e) => {
  console.log(e.stopPropagation());
  e.stopPropagation();
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let newColor = `rgb(${r},${g},${b})`;
  h2.style.backgroundColor = newColor;
  console.log(newColor);
};
changeColor.addEventListener("click", makeChangeColor);
h2.addEventListener("click", function () {
  h2.classList.toggle("hide");
});
