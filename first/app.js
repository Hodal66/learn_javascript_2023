let allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "red";
  link.style.fontSize = "3rem";
  link.style.fontStyle = "italic";
  link.style.textDecorationColor = "rgb(30,40,50)";
  link.style.textDecorationStyle = "wavy";
}
