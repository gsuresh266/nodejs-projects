var http=require("http");

http.createServer(function(request,response){
response.writeHead(200,{"Content-type":"text/plain"});
response.end("hello Sasuresh..!!!!!!!!!!!")
}).listen(2233);

console.log("Server is running at port 1234");


