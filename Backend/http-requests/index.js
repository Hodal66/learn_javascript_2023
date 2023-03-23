const express = require("express");
const server = express();
const colors = require("colors");
const port = 3050;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", (req, res) => {
  res.send("This home page that you have requested");
});
server.get("/ikijumba", (req, res) => {
  res.send("THIS is get route you have requested");
});
server.post("/ikijumba", (req, res) => {
  const myName = req.body.name;
  console.log(req.body);
  if (myName === "Hodal") {
    console.log("You passed the requestrs thank you ", myName);
    res.send(`You passed the requests thank you , ${myName}`);
  } else {
    console.log("You are not allowed to pass");
    res.send("You are not allowed to pass");
  }
});

server.listen(port, (req, res) => {
  console.log(
    `Server of get and post is running at http://locallhost:${port}`.rainbow
  );
});
