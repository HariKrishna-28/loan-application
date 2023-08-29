const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("hi frans");
});

app.listen(process.env.PORT | 5000, () => {
  console.log("Server up");
});
