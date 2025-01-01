/*
- URL module splits up a web address into readable parts
- Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
 */
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q);
console.log(q.host); //localhost:8080
console.log(q.port); // 8000
console.log(q.path); // /default.htm?year=2017&month=february
console.log(q.search); // return 



