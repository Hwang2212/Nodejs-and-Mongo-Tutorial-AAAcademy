// import inbuilt package from node runtime called http

var http = require('http');

// Use http to create first server
//createServer() will use call back function to create new server
var myFirstServer = http.createServer((request,response) => {
    console.log("###########start##########");
    // console.log(request);
    console.log("###########end##########");
    response.writeHead(200,{'Content-Type': 'text/html'}) // Can decide what type of data to rsponse
    response.write("<h1>Hello from node server!</h1>")
    response.write("Hello from node server!")
    response.end();

});

myFirstServer.listen(88, ()=> {
    console.log("Server is running on https://localhost:88");
}) 
