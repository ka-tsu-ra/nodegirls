var http = require('http');
var port = process.env.PORT || 8000;

function handler(request, response) {
  // display HELLO WORLD when the user is on the home page
  // the request object has a bunch of properties and information in it

  console.log(request);
  
  var url = request.url; // e.g. '/'
  
  if (url.length ===1) {
    response.writeHead(200, {"Content-Type": "text/html"}); // makes the status code 200 get written, along with the content type text/html
    response.end("HELLO WORLD!");                           
  }
}
// use http module's method createServer, pass in the handler function, and tell it to listen at the port we defined.
// pass the handler in as something the server knows it should call every time the server is called. the server will invoke it and we dont need to call the handler every single time.

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);
