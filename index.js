const express = require("express");// this return a function which we assign into app
const app = express();
// app.post()
// app.put()
// app.delete()
app.get("/",(req,res)=>{
  res.send("Hello to My Server!")
});
app.get("/remote/home",(req,res)=>{
    res.send({id:1,firstname: "john",secondname: "steven"})
})

app.get("/fellowship",(req,res)=>{

    res.send("Fellowship home!!")
})

app.listen(3000,()=>{console.log("Listen on port 3000...")})

