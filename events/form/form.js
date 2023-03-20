let button = document.querySelector("button");
let input = document.querySelector("input");
let secondInputId = document.querySelectorAll("input")[1];
let boldValue = document.querySelector("b");
let listOfAllDogs = document.querySelector("#listOfAllDogs");
button.addEventListener("click", function (e) {
  e.preventDefault();
  let nameOfDog = input.value;
  let li = window.document.createElement("LI");
  let removeBtn = window.document.createElement("button");
  removeBtn.innerText = "Delete";
  li.innerText = nameOfDog;
  listOfAllDogs.appendChild(li);
  listOfAllDogs.append(removeBtn);
  removeBtn.addEventListener("click", function () {
    listOfAllDogs.remove(li);
    listOfAllDogs.remove(removeBtn);
  });
  input.value = "";
});
secondInputId.addEventListener("input", function () {
  console.log("Some thing changed");
  boldValue.innerText = secondInputId.value;
});
