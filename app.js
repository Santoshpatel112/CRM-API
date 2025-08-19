import express from "express";
import dotenv from "dotenv"
const app=express();
dotenv.config();
const PORT =process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("hello from backend");
    return res.json("Hello");
})



app.listen(PORT ,(req,res)=>{
    console.log(`Server are litning on PORT ${PORT}`);
})
