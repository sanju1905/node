var http=require('http');


http.createServer((req,res)=>
{
    res.write(req.url);
    res.end(0);
   
}).listen(8080)