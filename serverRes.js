var http=require('http');



http.createServer((req,res)=>
{
    res.write("Sanjay");
    res.end(0);
    console.log("Running")
}).listen(8080)