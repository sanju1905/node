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

//POST
const http=require('https');
const https=require('https');
const opt3=
{
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    path:'/',
    method:'POST',

};
const req3=https.request(opt3,(res)=>
{
    res.on('data',(data)=>
    {
        console.log(data);
        process.stdout.write(data);
    })
})
req3.on('err',(err)=>
{
    console.log(err);
});
const data=JSON.stringify(
    {
        name:'Sanjay Kandula'
    }
);
req3.write(data);
req3.end();

//PUT

const http=require('https');
const https=require('https');
const opt4=
{
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    path:'/',
    method:'PUT',

};
const req4=https.request(opt4,(res)=>
{
    res.on('data1',(data1)=>
    {
        console.log(data1);
        process.stdout.write(data1);
    })
});
req4.on('err',(err)=>
{
    console.log(err);
});
const data1=JSON.stringify(
    {
        name:'Sanjay Kandula',
    }
);
req4.write(data1);
req4.end();