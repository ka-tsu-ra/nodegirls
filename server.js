var http = require('http');
var fs   = require('fs');
var port = process.env.PORT || 8000;

function handler(request, response) {
  // display HELLO WORLD when the user is on the home page
  // the request object has a bunch of properties and information in it. Including the .url property which updates with whatever is entered in the url      bar in the browser.

  // console.log(request); to take a look at the request object. it's huge.

  var url = request.url; // request.url is just automatically populated to be whatever url is typed in to the address bar

  if (url === '/') {


    fs.readFile(__dirname + '/index.html', function (error, index){
    //sends the index back to the client!
    //  '__dirname' refers to current directory

    // Node functions - first argument often error so you can deal with it if there's any error
    // Second argument is the content that's found by fs.readFile - we call it index in there. Then can refer to index in the bit that tells
    // the response what to do with it.

    response.writeHead(200, {"Content-Type": "text/html"}); // makes the status code 200 get written, along with the content type text/html

    response.write('Whaaaaaaat?');
    response.end(index);

    });

  } else if (url === '/cat') {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('<img src="http://bit.ly/1WEEsZI" />')
  }
}
// use http module's method createServer, pass in the handler function, and tell it to listen at the port we defined.
// pass the handler in as something the server knows it should call every time the server is called. the server will invoke it and we dont need to call the handler every single time.

http.createServer(handler).listen(port);

console.log('node http server listening on http://localhost:' + port);
