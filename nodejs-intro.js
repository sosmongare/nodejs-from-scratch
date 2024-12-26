var http = require('http'); //HTTP module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
var dt = require('myfirstmodule'); // custom module imported

// createServer function creates an HTTP server:
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  //res.write('The current date is ' + dt.myDateTime() + '<br>');
  res.write(req.url);
  res.end('Hello World!');
}).listen(8080);


// server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// run with `node server.mjs`