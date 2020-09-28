const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Inside nodejs backend...");
});

const Port = 9000;

app.listen(Port, () => {
  console.log("Server running on port" + Port);
});
