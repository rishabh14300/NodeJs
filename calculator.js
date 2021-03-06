const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",  function(req, res){
//   res.send("Hello");
// });

app.get("/",  function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  res.send("Thanks");
});

app.listen(4000, function(){
  console.log("App is running on port 4000");
});
