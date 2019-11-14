var express = require('express');
var fs = require('fs');



function listening(){

    console.log("Http Listening...")
  
}

httpServer.listen(80,listening);


app.use(express.static("Home_page"));