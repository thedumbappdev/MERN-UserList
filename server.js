const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Inside nodejs backend...");
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.post("/api/register", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Data received",
  });
});

app.get("/api/users", (req, res) => {});

const Port = 9000;

app.listen(Port, () => {
  console.log("Server running on port" + Port);
});
