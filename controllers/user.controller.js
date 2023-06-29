const uder=require('../models/user.model');
const createuser=(req,res)=>
{
  uder.create(req.con,req.body,(err)=>
  {
    if(!err)
    {
        res.send({success:true,data:null,message:"User created successfully"})
    }
  })
}
module.exports={
    createuser
}