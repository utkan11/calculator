const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded( {extended:true}));




app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");

});

app.post("/", function(req,res){
var numberOne = Number(req.body.numberOne) ;
var numberTwo = Number(req.body.numberTwo);
var result=numberOne+numberTwo;
res.send("the result of the calculation is"+result);

});

app.listen(3000, function () {
    console.log("Server is running o port 3000.");
});



