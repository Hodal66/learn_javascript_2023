document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

let input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "keyup":
      console.log("KEYUP");
      break;
    case "keydown":
      console.log("KEYDOWN");
      break;
    case "Enter":
      console.log("ENTER");
      break;
    case "Backspace":
      console.log("BACKSPACE");
      break;
    default:
      console.log("Inalid press");
  }
});

// input.addEventListener("keyup", function () {
//   console.log("KEYUP");
// });
