const express = require("express");
const app = express();
const colors = require("colors");
const port = 9000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/moviesApp");
try {
  const moviesSchema = mongoose.Schema({
    title: String,
    score: Number,
    isAvaillable: Boolean,
    age: Number,
    author: String,
  });

  const Movie = mongoose.model("Movie", moviesSchema);

  const myFindings = Movie.find();
  console.log("Ibyo Ni byoo Nishakiye Kuruhande:: ", myFindings);
  console.log("Waw Database Connected Successfully!!".rainbow);
} catch (error) {
  console.log("Oh No There is an Error!!!");
  console.log(error);
}
app.listen(port, (req, res) => {
  console.log(`Our Server is Running at http://localhost:${port}`);
});
