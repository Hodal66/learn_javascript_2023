let RandomColor = document.querySelector("#btnRandomColor");
let h1 = document.querySelector("h1");

RandomColor.addEventListener("click", () => {
  console.log("Do you whant to change the color??");

  const newColor = makeRandomColor();

  document.body.style.background = newColor;
  h1.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if (r < 50 || g < 50 || b < 50) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  return `rgb(${r},${g},${b})`;
};
