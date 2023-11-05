const http = require("node:http");
const fs = require("fs")
const {callAi} = require("./openAi.js");

http.createServer({}, function(req, res){
    if(req.method == "GET"){
        fs.readFile("Hackathon/index.html", {}, function(error, data){
            if(error == null){
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
            else{
                console.error(error);
            }
        })
    }
    else if(req.method == "POST"){
        console.log("making POST request");
        //send info to ai and return 3 types of messages
        var fullData = "";
        req.on("readable", function(){
            fullData += req.read();
            console.log("new data");
            console.log(fullData);
        })
        req.on("end", function(){
            console.log("request ended");
            console.log(fullData);
            callAi("Tell me how to archieve " + fullData).then(function(response){res.end(response)}, function(error){console.log(error); res.end("Error")});
        })
    }
}).listen(8000);
