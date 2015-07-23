/**
 * Created by salomon on 21/07/2015.
 */
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


console.log('start');

// Connection URL
/*var url = 'mongodb://shopper:idc2015@ds053300.mongolab.com:53300/shopperdb';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});*/

console.log('end');