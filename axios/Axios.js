const Jockes = document.querySelector("#Jockes");
const buttons = document.querySelector(".btn");

const myObjects = ["igitoki", "umuneke", "ifiriti", "kawunga", "Karoti"];
let count = 0;
const cliMeToCheckout = () => {
  console.log(myObjects[count]);
  if (count <= 4) {
    const Li = document.createElement("LI");
    Li.innerText = myObjects[count];
    Jockes.appendChild(Li);
    count++;
  }
};
buttons.addEventListener("click", cliMeToCheckout);

// const addJockes = async () => {
//   const config = { headers: { Accept: "application/json" } };
//   const res = await axios.get("https//www.getjockes.com", config);
//   console.log(res.data.Jockes.name);
// };
