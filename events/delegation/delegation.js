let button = document.querySelector("button");
let twitsFormContainer = document.querySelector("#TwitsForm");
let twits = twitsFormContainer.nextElementSibling.twitsInput.value;
console.log(twits);
button.addEventListener("click", (e) => {
  e.preventDefault();
  alert("wellcome");
});
