var express = require('express');
var app = express();
var routes = require('./routes/routes.js');


app.set('view engine', 'jade');

//if using local jq bootstrap images etc
app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);



var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res) {
    console.log('im running aT ', port);
});