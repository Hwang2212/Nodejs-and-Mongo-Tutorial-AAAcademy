var fs = require('fs')

var message = "I can write to files using fs package in node"

fs.writeFile("myfile.txt", message, (error)=>{
    if(error){
        throw error
    }

    console.log("Written to file with success");
})