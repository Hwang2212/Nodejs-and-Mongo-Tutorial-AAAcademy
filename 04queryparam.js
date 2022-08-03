var http = require("http");
var url = require("url");

var server = http.createServer((request, response)=>{
    // Write header
    response.writeHead(200,{'Content-Type': 'text/html'}) // Can decide what type of data to rsponse
    console.log("Working with query params");

    // console.log(request);
    console.log("Request is coming from....")
    console.log(request.url)

    // Use url package import to extract 
    // query parameters from url

    var queryParamObject = url.parse(request.url, true).query;
    console.log("Extracted queryparameters from request.url");
    console.log(queryParamObject);



    response.write("Query parameters received!");
    response.write("<br>")
    response.write("Name: " + queryParamObject.name + "\n")
    response.write("<br>")
    response.write("Location: " + queryParamObject.location + "\n")
    response.write("<br>")
    response.write("Topic: " + queryParamObject.topic)
    response.end()
})

server.listen(3333, ()=>{
    console.log("Listening on port 3333");
})