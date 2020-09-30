const express = require("express");
const mongoose = require("mongoose");
const { restart } = require("nodemon");
const app = express();
const User = require("./models/user");

// app.get("/", (req, res) => {
//   res.send("Inside nodejs backend...");
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

const dbUrl =
  "mongodb+srv://test01:test%2301@test01.tnoqd.mongodb.net/react-node?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongo DB is connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

// Connect Database
connectDB();

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.userName,
      email: req.body.userEmail,
    });

    res.json({
      message: "User Registered",
    });
  } catch (error) {
    res.json({
      message: "The email is already registered.",
    });
  }

  console.log(req.body);
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json({ users: users });
  } catch (error) {
    console.log(error);
  }
});

const Port = 9000;

app.listen(Port, () => {
  console.log("Server running on port: " + Port);
});
