var express = require('express');
var cors = require('cors');
var app = express();
var storage = [];
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cors());

  // for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/save', function(req, res){
  var data = req.body;
   storage.push({data}); 
   //console.log(req.body);
   res.send(req.body);
});

app.get('/fetch', function(req,res){
    res.send(storage);
});

app.get('/sample', function(req,res){
    res.send('hi');
});

app.listen(8081);