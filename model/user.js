import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }

}, {timestamps:true}



)

const UserModel = mongoose.model('users' , userSchema);

export default UserModel 