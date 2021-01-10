// const express = require("express");// this return a function which we assign into app
// const app = express();
// // app.post()
// // app.put()
// // app.delete()
// app.get("/",(req,res)=>{
//   res.send("Hello to My Server!")
// });
// app.get("/remote/home",(req,res)=>{
//     res.send({id:1,firstname: "john",secondname: "steven"})
// })

// app.get("/fellowships",(req,res)=>{

//     res.send("Fellowship home!!")
// })
// //show route
// app.get("/fellowships/:id",(req,res)=>{
//    const fellowship = fellowships.find(element.id === parseInt(req.params.id))
//    console.log(fellowship)
// })
// const port = process.env.PORT || 3000
// app.listen(port,()=>{console.log(`Listen on port ${port}...`)})


// const { dir } = require("console");
// const path = require("path");

// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("Stand up",listenToStandUp)
// emitter.emit("Stand up")
// function listenToStandUp(){
//     console.log("i am listen to stand up")
// }

//Loading express which return function
const express = require("express");
const app = express();
app.use(express.json())

const arrays = [
{id:1,course: "We work at home"},
{id:2,course: "JavaScript Good"},
{id:3,course: "Learning expose you to alot"},
{id:4,course: "Kepp learning my friends"},
{id:5,course: "I don't sleep when i am coding"}

]


app.get("/",(req,res)=>{
    res.send("This is the root of the website")
})
app.get("/api/arrays",(req,res)=>{
   res.send(arrays)

})
app.post("/api/arrays",(req,res)=>{

  const configObj = {
       id: arrays.length + 1,
       course: req.body.course,
       
  }
   arrays.push(configObj)
   res.send(configObj)
})

app.get('/api/arrays/:id',(req,res)=>{
 const arrayId = arrays.find(c=> c.id === parseInt(req.params.id))
  if(!arrayId){
      res.status(404).send("this page is not found!")
  }else{
      res.send(arrayId)
  }
})
const port = process.env.PORT || 3000
app.listen(port,console.log(`Listen to port ${port}`))