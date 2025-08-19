import express from "express";
import dotenv from "dotenv"
import ConnectDB from "./DB/db.js";
const app=express();
dotenv.config();

const PORT =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("hello from backend");
    return res.json("Hello");
})



app.listen(PORT ,(req,res)=>{
    console.log(`Server are listning on PORT ${PORT}`);
    ConnectDB();
})
