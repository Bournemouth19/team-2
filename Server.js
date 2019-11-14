var express = require('express');
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser')
app.listen(80,listening);

var { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'jpmc',
  password: '123456',
  port: 5432,
})

client.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register',Register);

function Register(request,response){
    console.log(request.body);
    client.query("SELECT * FROM users ", (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            for(var i=0;i<res.rows.length;i++){
            if(res.rows[i].username==request.body.usr){
                var reply={
                    msg: 'Username aleready in use',
                }
                response.send(reply);
                break;
            }else{
                if(i==res.rows.length-1){

                client.query("INSERT INTO users VALUES ('"+request.body.usr+"','"+request.body.pas+"');", (err, res) => {
                    if (err) {
                      console.log(err.stack)
                    } else {
                      //console.log(res.rows[0])
                }
                })
                var reply={
                    msg: 'Succesfull registration',
                }
                response.send(reply);
                }
            }   
        }
    }
    })
    

}

app.post('/signin',Signin);

function Signin(request,response){
    //console.log(request.body);
    client.query("SELECT * FROM users ", (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          for(var i=0;i<res.rows.length;i++){
            if(res.rows[i].username==request.body.usr && res.rows[i].password==request.body.pas){
                console.log("match")
                var reply={
                    msg: 'sucess',
                    usr: request.body.usr,
                }
                USER=request.body.usr;
                response.send(reply);
                break;


            }else{
                if(i==res.rows.length-1){
                    respond=true;
                    console.log("no match")

                    var reply={
                        msg: 'invalid password/username'
                    }
                    response.send(reply);
                }
            }
          }
    }
    })

    
}

app.get('/video', function(req, res) {
    const path = 'videos/video walkthrough 1 Outside (1).mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  });
  app.get('/video2', function(req, res) {
    const path = 'videos/video walkthrough 2 cafe (5).MP4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1] 
        ? parseInt(parts[1], 10)
        : fileSize-1
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  });



  app.post('/manageDev',manage);
  function manage(request,response){
      
      client.query("insert into feedback values ("+request.body.id+"','"+request.body.com+"');", (err, res) => {
          if (err) {
              console.log(err.stack)
            
            } else {
               
    
        }
        })
      
  
      }
  





function listening(){

    console.log("Listening... port 80")
  
}

app.use(express.static("Home_page"));
app.use('/profile' , express.static("Profiles"));