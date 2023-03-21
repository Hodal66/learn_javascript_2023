const express = require("express");
const colors = require("colors");
const app = express();
const ejs = require("ejs");
const path = require("path");
const data = require("./data.json");
const port = 9000;

app.set("views engin", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const selectedData = data[subreddit];
  if (selectedData) {
    res.render("school.ejs", { ...selectedData });
  } else {
    res.render("pageNotFound.ejs", { subreddit });
  }
});

app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { number });
});

app.get("/cats", (req, res) => {
  const allCats = ["majua, martine, kjaqueline, cowboy, bigDog"];
  res.render("cats.ejs", { allCats });
});

app.get("/gots", (req, res) => {
  res.send(`This Routes is for Gots page `);
});

app.get("/home/:addredit/:secondRoute", (req, res) => {
  res.send(
    `<h1>This is home page and the First Routes is ${req.params.addredit} The Second Route is ${req.params.secondRoute}</h1>`
  );
});
app.get("/my-search", (req, res) => {
  const searchQuery = req.query.q;
  if (searchQuery === "Mwizaa") {
    res.send(
      `<h1>Your Reaserch is successfully requested on ${searchQuery}</h1>`
    );
  } else {
    res.send(
      `<h1>Your Search query of ${searchQuery} is not what we have</h1> `
    );
  }
});

app.post("/postcats", (req, res) => {
  res.send("THis is post request whic is different with get request!!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
