const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("I am the Gloabalmiddleware");
    next();
})

const port=4000;

const localMiddleware=(req,res,next)=>{
    console.log("localmiddleware is used")
  next();
}



app.get('/',(req,res)=>{
    res.write("<h1>Welocme to first page</h1>");
    res.end()
})

app.get('/secondmiddleware',localMiddleware,(req,res)=>{
    res.write("<h1>Second Time the middleWare is used</h1>");
    res.end();
})


app.listen(port,()=>{
    console.log("hi")
})