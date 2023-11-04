const https = require("node:https");
const fs = require("fs")
const {main} = require("./openAi.js");

https.createServer({}, function(req, res){
    if(req.method == "GET"){
        fs.readFile("index.html", {}, function(error, data){
            if(error == null){
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
            else{
                console.error(error);
            }
        })
    }
}).listen(8000);
