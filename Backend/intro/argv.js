const fs = require("fs");
const nameOfFolder = process.argv[2];

try {
  fs.mkdirSync(nameOfFolder);
} catch (error) {
  console.log("There is an error");
  console.log(error);
}
