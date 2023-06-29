const express=require('express');
const router=express.Router();
const userController=require('../controllers/user.controller');
router.post('./createuser',userController.createuser);
router.get('./getAllusers',(req,res)=>{});
router.get('./getUser',(req,res)=>{});
router.put('./updateUser/:id',(req,res)=>{});
router.delete('./deleteUser/:id',(req,res)=>{});
module.exports=router;