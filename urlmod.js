var url=require('url');
var add='https://www.w3schools.com/nodejs/nodejs_http.asp'
var q=url.parse(add,true);
/*console.log(q.host);
console.log(q.pathname);*/
console.log(q.search);
