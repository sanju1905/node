// import module from 'module';
// const require=module.createRequire(import.meta.url);
var http=require('http');
var hostname='localhost';
const port=3000;
const server=http.createServer((req,res)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Sanjay kandula Hello</h1>");
}).listen(port,hostname,()=>
{
    console.log("Server is running");
})

const hello=require('./helloexport.cjs');
console.log(hello);
// const output=require('./samexprop');
// console.log(output.sam);
// const out2=require('./logmeth');
// out2.log("Hi u loohing Gorgeous");
// const out3=require('./utility');
// out3.log("Hello this is Sanjay");
// import log from './es6.js' ;
// log('hello sanjay');
// import {me} from './es6.js'
// me();
//progress bar
var ProgressBar = require('progress');
//types current,percent,bar
 
var bar = new ProgressBar(':percent', { complete:'+',total: 100 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
    process.exit(1);
  }
}, 100);