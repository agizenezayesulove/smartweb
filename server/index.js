const express= require("express");
const cors= require("cors");
const nodemon= require("mongoose");


mongoose
  .connect("mongodb://127.0.0.1:27017/dashboardDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app= express();
const PORT=3000;
 app.get("/",(req,res)=>{
    res.send("welcome to dashboard");

 });
 app.listen(PORT,()=>{
    console.log(`server is running on http://localhost${PORT}`);
 })