const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

routes(app);

mongoose
  .connect(
    `mongodb+srv://manhdino_shoesDB:${process.env.MONGO_DB}@shoesdb.pnmqhmh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("Server is running in port: " + port);
});
