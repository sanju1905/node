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
        name:'Sanjay Kandula',
    }
);
req3.write(data);
req3.end();