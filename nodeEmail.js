var nodemailer=require('nodemailer');
var transportor=nodemailer.createTransport({
    service :'gmail',
    auth:{
        user:'sanjaykandula3@gmail.com',
        pass:'********'
    }
})

var options={
    from:'sanjaykandula3@gmail.com',
    to : 'sanjaykandula2001@gmail.com',
    sybject:'Testing mail',
    text:'Hello baby'
}
transportor.sendMail(options,(err,info)=>
{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log("Email sent"+info.response)
  }
})