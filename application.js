//application level middleware
var express = require("express");
var app = express();
var log = (req, res, next) => {
  console.log("middle ware working");
  next();
};

// app.use(log);

app.get("/", (req, res) => {
    res.end("server running ,ending ");

    app.use(log);
  })
app.listen(3000);
var fake={
    id:1,
    name:'arwin',
    role:'admkin'
}
var auth=((req,res,next)=>{
    if(fake.role=='admin'){
        console.log("authenticated correct user")
        next()
    }
    else{
        console.log("wrong user");
        res.end("wrong user")
    }
})
  app.use(auth);
  app.get("/home",(req,res)=>{
res.send("working");

})