var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res)
{
    console.log('request was made :' + req.url);
    res.writeHead(200, {'content-type': 'application/json'});
    var myObj = {
        name: 'Zoro',
        jon: "SwordsMan",
        age: 30
    }
    res.end(JSON.stringify(myObj));
})

server.listen(3000, '127.0.0.1');
console.log("serving JSOn data was created")