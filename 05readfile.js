var fs = require('fs');

fs.readFile("name.txt",(error, data)=> {
    if(error){
        throw error
    }
    console.log("File read success");
    console.log(data);
    console.log(data.toString()); //convert data to string because it is binary
})