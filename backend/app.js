const express = require("express");
const connectDb = require("./src/utils/Database/Connection");

const app = express();

// connects to the database
connectDb();

app.get("/", (_, res) => {
  res.send("hi frans");
});

app.listen(process.env.PORT | 5000, () => {
  console.log("Server up");
});
