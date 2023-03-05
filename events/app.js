const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me a lot");
};

function mouseEnter() {
  console.log("AAAAAAAHhhhhh");
  console.log("Don't tauche me!!");
}
btn.onmouseenter = mouseEnter;

document.querySelector("h1").onclick = function () {
  console.log("please stop");
};

let v3 = document.querySelector("#v3");

v3.addEventListener("mouseup", function () {
  alert("You mouse down");
});

let tasButton = document.querySelector("#tas");
function shout() {
  console.log("Shout");
}
function twist() {
  console.log("Twist");
}

// tasButton.onclick = shout;
// tasButton.onclick = twist;
// tasButton.addEventListener("click", twist);
// tasButton.addEventListener("click", shout);
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout, { once: true });
