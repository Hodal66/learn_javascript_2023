const delayedColorChange = (color, timeItTakeToDisplay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    });
  }, timeItTakeToDisplay);
};

delayedColorChange("yellow", 1000)
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("red", 2000))
  .then(() => delayedColorChange("green", 3000))
  .then(() => delayedColorChange("black", 4000))
  .then(() => delayedColorChange("magenta", 5000))
  .then(() => delayedColorChange("orange", 6000));
