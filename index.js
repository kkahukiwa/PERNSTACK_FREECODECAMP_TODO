const express = require("express");
const nodemon = require("nodemon");
const app = express();

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
