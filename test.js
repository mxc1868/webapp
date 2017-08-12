var express = require("express");
var app = express();
var request = require("request");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://mxc1868:mxc1868@cluster0-shard-00-00-kbwok.mongodb.net:27017,cluster0-shard-00-01-kbwok.mongodb.net:27017,cluster0-shard-00-02-kbwok.mongodb.net:27017/webapp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true})); 
app.use("/",express.static("static"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", function(req, res) {
    res.redirect("http://www.mxcmia.com");
});
app.get("/movie", function(req, res) {
        var name = req.query.name;
        if(name){
            request("http://www.omdbapi.com/?s="+name+"&apikey=thewdb", function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    res.render("app/movie/movie", {body: body});
                }
            }); 
        } else {
            var body;
            res.render("app/movie/movie",{body:body});
        }
});
//Schema
var todoSchema = mongoose.Schema({
    id : Number,
    thing : String,
    line: Boolean
});
var List = mongoose.model("list", todoSchema);
app.get("/todo", function(req, res) {

    // DB query
    List.find({}, function(err, result) {
        if (err) {
            result = [{id : 0, thing : "Database Connecting Error", line : false}]
        }
        res.render("app/todo/todo.ejs", {result:result});
    })
    
})
app.post("/todo", function(req, res) {
    var body = req.body;
    if (body.method === "CREATE"){
        List.create({id : body.id, thing : body.thing}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.send("Success");
            }
        });
    } else if (body.method === "DELETE") {
        List.remove({id : body.id}, function(err, result) {
            if (err) {
                console.log(err);
            }
        });
    } else if (body.method === "UPDATE") {
        List.update({ id: body.id }, { $set : { line : body.line} }, function(err, result) {
            if (err) {
                console.log(err);
            } 
        });
    }
})
app.get("/:name", function(req,res) {
    var name = req.params.name;
    res.render("app/"+name+"/"+name);
})




app.listen(3000);