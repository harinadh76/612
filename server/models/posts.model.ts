import {IUser} from './user.model'
import mongoose, {Schema,Model,model, Types} from "mongoose"
export interface IPosts extends Document{
    user: IUser | Types.ObjectId | String,          //ref to userid
    photo : String,
    description : String,
    likes: Array<Types.ObjectId | IUser | String>,         //array of userid
    tags : string[],
    locate : string,      //location
}
const postSchema : Schema = new Schema ({
    user: {
        type : Schema.Types.ObjectId,
        ref:'User',require:true
    },        
    photo: {
        type : String
    },
    description: {
        type : String
    },
    like : {
        type : mongoose.Types.ObjectId ,
         ref:'User',
         require:true
        }, // array of users
    tags : {
        type : [String]
    },
    locate : {
        type:String,
        trim:true
    }
},{timestamps : true})

export const Posts : Model<IPosts> = model<IPosts>('Posts',postSchema)