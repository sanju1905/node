//GET
const http= require('http');
const https=require('https');
const option2=
{
    hostname:"jsonplaceholder.typicode.com",
    port:3000,
    path:"/users",
    method:"GET",
};
const req2=https.request(option2,(res)=>
{
    res.on('data',(data)=>
    {
        console.log(data);
        process.stdout.write(data);
    });
});
req2.on("err",(err)=>
{
    console.log(err);
});
req2.end();