require("dotenv").config();
const express = require("express");
const app = express();
const connectToDb = require("./conn");

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`The Socket.io server running at port ${process.env.PORT}`);
});
