const express = require("express");
const connectDb = require("./src/utils/Database/Connection");
const cors = require("cors");
const helmet = require("helmet");

const businessRoute = require("./src/routes/business");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// connects to the database
connectDb();

app.get("/", (_, res) => {
  res.send("server up");
});

app.use("/api/business", businessRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server up");
});
