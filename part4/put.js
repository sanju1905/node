
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