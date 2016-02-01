var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('foo');
});

app.listen(8080);
console.log('I\'ma do it');
