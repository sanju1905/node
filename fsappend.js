var http=require('http');
var fs=require('fs');


http.createServer((req,res)=>
{
    fs.appendFile('test.txt','fruity',(err,data)=>
    {
        res.write(data);
        res.end();
    })
}).listen(8080)