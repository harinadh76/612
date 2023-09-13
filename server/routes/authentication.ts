import express from 'express';
import {User} from '../models/user.model';

const router=express.Router();

router.post('/signup',async (req : any,res : any)=>{
    try{
        const user=new User({
            username:req.body.userName,
            email:req.body.email,
            password:req.body.password,
            // following:req.body,
            // profilePic:req.body,
            gender:req.body.gender,
            dob:req.body.dob
            
        })

        await user.save()

        return res.status(201).json({message : "user created"});
    }
    catch(error){
        console.log("user creation failed:",error)
        return res.status(500).json({message : "internal server error"});
    }
})

module.exports = router;