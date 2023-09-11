// import {IUser} from 
import {Schema,Model,model} from "mongoose"
export interface IPosts extends Document{
    user: any,          //ref to userid
    photo : String,
    description : String,
    likes: any,         //array of userid
    tags : string[],
    locate : string,      //location
}
const postSchema : Schema = new Schema ({
    user: {type : String},
    photo: {type : String},
    description: {type : String},
    like : {type : Int16Array}, // array of users
    tags : {type : [String]},
    locate : {
        type:String,
        trim:true
    }
},{timestamps : true})

export const Posts : Model<IPosts> = model<IPosts>('Posts',postSchema)