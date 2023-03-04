// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

let container = document.querySelector(".container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 150; i++) {
  const pokemanDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const pokemanSpan = document.createElement("span");
  //   const pokemanId = `${i}`;
  newImg.src = `${baseURL}${i}.png`;
  console.log(newImg.src);
  container.appendChild(pokemanDiv);
  pokemanDiv.appendChild(newImg);
  pokemanSpan.innerText = `${i}`;
  pokemanDiv.appendChild(pokemanSpan);
}
