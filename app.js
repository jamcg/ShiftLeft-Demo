var http = require("http");

http.createServer(function (request, response) {
   // Send the 200 : OK
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running on port 8080');
