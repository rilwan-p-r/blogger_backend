import express from "express";
const app =express();
import dotenv from "dotenv";
dotenv.config()
const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})