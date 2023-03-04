const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

app.use("/", router);

mongoose
  .connect(
    "mongodb+srv://nguyenla171120:eQNuRU9MeUg4DBuj@cluster0.knfgo6k.mongodb.net/portfolio_management?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("🚀 Server is running at http://localhost:5000");
    });
  });
