var http = require("http");
var url = require("url");

function start(route,render){
 function onRequest(request, response) {
    
    if(GLOBAL.logging)
      console.log("[INFO] Request recieved: " + request.url);
    
    var content = route(url.parse(request.url).pathname,render);    
  
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
  } 
  var app = http.createServer(onRequest);
  app.listen(8888); 
  if(GLOBAL.logging)
    console.log("[INFO] " + GLOBAL.appName + " server has started... listening on port 8888.");
}

exports.start =  start;
