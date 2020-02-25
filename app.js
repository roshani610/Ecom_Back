const express=require('express');
const body_parser=require('body-parser');

const app=express();
app.use(body_parser.urlencoded({extended:true}));

app.get("/",(req,resp)=>{
    resp.status(200).send({"message":"Hello"});
})
app.listen(3000,()=>{
    console.log("Server is listerning to port 3000");
})