require("dotenv").config();
const express = require("express");
const app = express();
const connectToDb = require("./Db/conn");
const cors = require("cors");

connectToDb();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`The server running at port ${process.env.PORT}`);
});
