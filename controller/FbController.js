import UserModel from "../model/user.js"

const register=async(req,res)=>{
    try {
        const {email,password}=req.body
           
        // const existUser= await UserModel.findOne({email})
        // if (existUser) {
        //     return res.status(401).json({success:false,message:"User already Exist"})
        // }
        //     const hasepassword=await bcryptjs.hashSync(password,10)


        const newUser= new UserModel({
            email,password
        })
        
          await newUser.save()

          res.status(200).json({message:"user register successfully",newUser})
    } catch (error) {
        res.status(500).json({success:false,message:"interanl server error"})
        console.log(error)
    }
}





export {register}