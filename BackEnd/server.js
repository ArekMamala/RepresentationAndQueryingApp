var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://ArekMamala:arek1234@ds063909.mlab.com:63909/arekmovieapp';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    fullname:String,
    username: String,
    email: String,
    phonenumber: String,
    description:String

})
var PostModel = mongoose.model('users', postSchema);


//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.fullname);
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.phonenumber);
    console.log(req.body.description);


    PostModel.create({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        description: req.body.description



    });
    res.send('Item added');


})

app.get('/api/posts', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/posts/:id', function(req, res){
    console.log("rea document with id " + req.params.id);

    PostModel.findById(req.params.id,
         function(err, data){
             res.json(data);
         });

})

app.put('/api/posts/:id', function(req, res){
    console.log(req.params.id);
    console.log(req.body.fullname);
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.phonenumber);
    console.log(req.body.description);


PostModel.findByIdAndUpdate(req.params.id, req.body,
function(err, data){
    if(err)
        res.send(err);
    res.send(data);

})

})

app.delete('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    PostModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})