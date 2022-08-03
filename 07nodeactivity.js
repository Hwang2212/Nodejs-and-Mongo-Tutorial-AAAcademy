// Write query parameter data and the data is written to a file
var http = require('http');
var url = require("url")
var fs = require('fs');

var server = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type':'text/html'})
    console.log("Query data");
    console.log(request.url);

    var qPObject = url.parse(request.url, true).query
    console.log(qPObject);

    response.write(
        "House: " + qPObject.house + "\n" +
        "Location: " + qPObject.location + "\n" +
        "Type: " + qPObject.type 
    )
    response.write("<br>")
    response.write(
        "Your house is a " + qPObject.house+ " " +qPObject.type+ "\n" +
        "in " + qPObject.location 
    )

    var newHouse = "House: " + qPObject.house + "\n" +
    "Location: " + qPObject.location + "\n" +
    "Type: " + qPObject.type + "\n"+ "Your house is a " + qPObject.house+ " " +qPObject.type +
    " in " + qPObject.location;
    
    fs.writeFile('house.txt', newHouse, (error)=>{
        if(error){
            throw error
        }
    
        console.log("Written to file with success");
    })

    console.log(newHouse);
     
    response.end()


})

server.listen(1212, ()=>{
    console.log("Listening on port 1212")
})