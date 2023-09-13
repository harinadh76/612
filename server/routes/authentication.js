const express=require('express')
const User=require('../models/user.model.ts')

const router=express.Router();

router.post('/signup',async (req,res)=>{
    try{
        const user=new User({
            username:req.body,
            email:req.body,
            password:req.body,
            // following:req.body,
            // profilePic:req.body,
            gender:req.body,
            dob:req.body
            
        })

        await user.save()

        return res.status(201).json({message : "user created"});
    }
    catch(error){
        console.log("user creation failed:",error)
        return res.status(500).json({message : "internal server error"});
    }
})