
/*
The Node.js file system module allows you to work with the file system on your computer.
Common use for the File System module:

    - Read files
    - Create files
    - Update files
    - Delete files
    - Rename files

*/
var http = require('http');
var fs = require('fs'); // include file system module
 
http.createServer((req,res)=>{
    //--------------------Open a file on the server and return its content assuming the file you are reading exists:
    // fs.readFile('demofile1.html', (err,data)=>{
    //     res.writeHead(200, {'content-type':'text/html'});
    //     res.write(data);
    //     return res.end();
    // });

    /* 
    fs.appendFile() - method appends specified content to a file. If the file does not exist, the file will be created
    fs.open() - method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
    fs.writeFile() -  method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
    */
   // appendFile()----------------------------------------------------------------
    //    fs.appendFile('mynewfile.html', 'hello world',function(err){
    //     if (err) throw err;
    //     console.log('Saved!!');
    //    });

    // open()----------------------------------------------------------------
    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // }); 

    // writeFile()----------------------------------------------------------------
    // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   }); 

    /*
    <Update Files:/>
        fs.appendFile() - method appends the specified content at the end of the specified file:
        fs.writeFile() - method replaces the specified file and content:
    */ 
    // writeFile----------------------------------------------------------------
    // fs.writeFile('mynewfile3.txt', 'This is my texts', function (err) {
    //     if (err) throw err;
    //     console.log('Replaced!');
    //   }); 

        /*
        <Delete a File/>
        */ 
    // unlink()----------------------------------------------------------------
    // fs.unlink('mynewfile3.txt', function (err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    //   }); 

        /*
        <Rename a File:/>
        fs.appendFile() - method appends the specified content at the end of the specified file:
        fs.writeFile() - method replaces the specified file and content:
        */ 

    fs.rename('mynewfile.html','myrenamedfile.txt', function (err) {
        if (err) throw err;
            console.log('File renamed');
    });
    

}).listen(8000);