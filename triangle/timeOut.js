// console.log("This Message is before all things");
// setTimeout(() => {
//   console.log("Go to the backend to fetch data");
// }, 5000);
// console.log("This is the endof file");

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//       }, 1000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// "YOU CAN DO IT IN DIGITAL WAY"

const changeBackGroundColor = (colorToBeChanged, timeItWillTake, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = colorToBeChanged;
    doNext();
  }, timeItWillTake);
};
changeBackGroundColor("red", 2000, () => {
  changeBackGroundColor("yellow", 1000, () => {
    changeBackGroundColor("olive", 1000, () => {
      changeBackGroundColor("orange", 1000, () => {
        changeBackGroundColor("magenta", 1000);
      });
    });
  });
});
