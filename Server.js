var express = require('express');
var app = express()
var fs = require('fs');

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



client.query("insert into users (username,password,email) values ('test','test','test');"
, (error, results) => {
    if (error) {
      throw error
    }
    console.log(results);
  })



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
 



function listening(){

    console.log("Listening... port 80")
  
}

app.use(express.static("Home_page"));