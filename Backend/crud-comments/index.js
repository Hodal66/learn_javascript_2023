const express = require("express");
const server = express();
const colors = require("colors");
const path = require("path");
const { urlencoded } = require("express");
server.set("views engine", "ejs");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const port = 3300;
const karahanyuze = [
  { id: 1, fullName: "Kazungu", comment: "Urikeza" },
  { id: 2, fullName: "Mwuka", comment: "Kanjye" },
  { id: 3, fullName: "Cyiza besige", comment: "Nkwitayeho" },
];
server.get("/comments", (req, res) => {
  res.render("mycomments/home.ejs", { karahanyuze });
});

server.post("/comments", (req, res) => {
  console.log(req.body);
  const { fullName, comment } = req.body;
  karahanyuze.push({ fullName, comment });
  res.redirect("/comments");
});

server.get("/comments/:id", (req, res) => {
  const { id } = req.params.id;
  const comment = karahanyuze.find((c) => c.id === parseInt(id));
  res.render("mycomments/show.ejs", { comment });
});
server.get("/comments/new", (req, res) => {
  res.render("mycomments/new.ejs");
});

server.get("/", (req, res) => {
  res.send("Hello this is the home page");
});

server.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}`);
});
