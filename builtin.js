//sending static page on server without writng sednfile
// const express = require("express");
var express=require("express");
var  obj=express();
var path=require("path")
var fpath=path.join(__dirname,'/public')

obj.use(express.static(fpath)).listen(3000)