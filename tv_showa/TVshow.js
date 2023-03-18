const tvShowForm = document.querySelector("#TvShowId");
const btn = document.querySelector("button");

const showTV = (e) => {
  e.preventDefault();
  console.log(tvShowForm.elements.textInput.value);
};

btn.addEventListener("click", showTV);
String.prototype.yell = function () {
  return `OMG !!! ${this.toUpperCase()} !!!!!!!!!!!`;
};

// Array.prototype.pop = () => {
//   return "NOO I want this element only";
// };

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + [(1 << 24) + (r << 16) + (g << 8) + b].toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(23, 255, 30);

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + [(1 << 24) + (r << 16) + (g << 8) + b].toString(16).slice(1);
// };

// const color1 = new Color(20, 30, 50);
// const color2 = new Color(100, 200, 255);

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + [(1 << 24) + (r << 16) + (g << 8) + b].toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b},${a})`;
// };
// const color1 = new Color(12, 20, 30);
// const color2 = new Color(20, 230, 100);

//Contructor Key Word

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + [(1 << 24) + (r << 16) + (g << 8) + b].toString(16).slice(1);
  }
}

const pink = new Color(90, 30, 100, "Pink");
const white = new Color(255, 255, 255, "white");
