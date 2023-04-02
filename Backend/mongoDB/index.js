const express = require("express");
const app = express();
const colors = require("colors");
const port = 9000;
const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("Waw Database Connected Successfully!!".rainbow);
} catch (error) {
  console.log("Oh No There is an Error!!!");
  console.log(error);
}
app.listen(port, (req, res) => {
  console.log(`Our Server is Running at http://localhost:${port}`);
});
