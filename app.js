require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const companyRoutes = require("./controllers/company");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/company", companyRoutes);

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.p3ip8.mongodb.net/${process.env.MONGO_DEFAULT_DB}?retryWrites=true&w=majority`;

mongoose
   .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((result) => {
      app.listen(process.env.PORT || 8000, () => {
         console.log("connected");
      });
   })
   .catch((err) => {
      console.log(err);
   });
