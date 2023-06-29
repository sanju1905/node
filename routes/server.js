const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const con=require('../mysql/connect');
app=express();
port=3000;
app.use(cors({origin:"*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next)
{
   req.con=con;
   next();
});

//routes
const router=require('./user.route');
app.use('/api',router);




app.listen(port,()=>
{
    console.log("server created successfullty: " +port);
});