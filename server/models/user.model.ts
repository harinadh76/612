import {Schema,Model,model, Types} from "mongoose"

export interface IUser extends Document{
    username: String,
    email: String,
    password: String,
    following: Array<String | Types.ObjectId >,
    profilePic: String,
    gender: String,
    dob:Date,
}

const UserSchema : Schema = new Schema({
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
        // required:true,
        trim: true
    },
    profilePic:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        require:true,
    },
    dob:{
        type:Date,
    }
},{
    timestamps:true
})

export const User: Model<IUser> = model<IUser>('UserModel', UserSchema)
// module.exports = new mongoose.model('UserSchema', UserSchema)