var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.redirect("http://www.mxcmia.com");
});

app.listen(3001);