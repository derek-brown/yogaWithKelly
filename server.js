var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var yoga = require("./routes/yoga")
var app = express();

var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost/yogaDB", { useMongoClient: true, promiseLibrary: require('bluebird') })
	.then(() => console.log("connection sucessful"))
	.catch((err)=> console.error(err));

var db = mongoose.connection;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, "index.html")));

app.use("/api/yoga", yoga);