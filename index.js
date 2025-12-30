const express = require("express");
const userSchema = require("./model/userSchema")
const  mongoose  = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json())


import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);


const cors = require("cors");
app.use(cors());


// Database
mongoose
  .connect("mongodb+srv://clementine:Cytokinesis489@clusterone.gcrvyzm.mongodb.net/clementine?appName=ClusterOne")
  .then(() => console.log("Connected!"))
  .catch(err => console.error(err));

// Database

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", (req, res) => {
  res.send("data send");
  const { name, email, password } = req.body;

  const user = userSchema({
    name: name,
    email: email,
    password: password,
  })

  user.save() });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
