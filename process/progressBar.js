//progress bar
var ProgressBar = require('progress');
//types current,percent,bar
 
var bar = new ProgressBar(':current', { complete:'+',total: 100 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
    process.exit();
  }
}, 100);