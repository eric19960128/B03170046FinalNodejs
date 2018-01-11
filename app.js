var express = require('express');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');

var app =express();

mongoose.connect("mongodb://test1:test1@ds159208.mlab.com:59208/db4");

var data1= [];
var todoSchema = new mongoose.Schema({
  item:String
});

var Todo = mongoose.model('todo', todoSchema);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('viewspage/index');
});

app.get('/about', function(req, res) {
	console.log('server start about..');
	res.render('viewspage/about');
});

app.get('/about2', function(req, res) {
	console.log('server start about2..');
	res.render('viewspage/about2');
});

app.get('/about3', function(req, res) {
	console.log('server start about3..');
	res.render('viewspage/about3');
});

app.get('/chatpost', urlencodedParser, function(req, res){
  console.log('server start contact..');
  res.render('viewspage/chatpost',{data:data1});
});

app.post('/chatroom', urlencodedParser, function(req, res) {
	console.log(req.body);
  	data1.push(req.body);
	res.render('viewspage/chatroom', {data:data1});
});

console.log('port listen 8000..');
app.listen(8000);
