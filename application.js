//application level middleware
var express = require("express");
var app = express();
var log = (req, res, next) => {
  console.log("middle ware working");
  next();
};

app.use(log);

app.get("/", (req, res) => {
    res.end("server running ,ending ");

    app.use(log);
  })
  .listen(3000);
