var http=require('http');
var uc=require('upper-case');
http.createServer((req,res)=>
{
    res.write(uc.upperCase('Hello World'));
    res.end();
}).listen(8080)