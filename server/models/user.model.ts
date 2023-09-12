const mongoose = require('mongoose')
import {Model, model, Schema, Types, Document} from "mongoose"

export interface IUser extends Document{
    username: String,
    email: String,
    password: String,
    following: Array<String>,
    profilePic: String
}

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    following:{
        type:Array,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    }
})

export const User: Model<IUser> = model<IUser>('UserModel', UserSchema)
// module.exports = new mongoose.model('UserSchema', UserSchema)