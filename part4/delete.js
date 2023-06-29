//DELETE
import { createRequire } from 'module';
const http= require('http');
const https=require('https');
const option2=
{
    hostname:"https://jsonplaceholder.typicode.com/users",
    port:443,
    path:"/users/1",
    method:"DELETE",
};
const req2=https.request(option2,(res)=>
{
    res.on('data',(data)=>
    {
        console.log("delete status");
        process.stdout.write(data);
    });
});
req2.on("err",(err)=>
{
    console.log(err);
});
req2.end();