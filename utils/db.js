import mongoose from 'mongoose';

const dbCon=async()=>{


    try{
            await mongoose.connect('mongodb+srv://zahid:zahid123@cluster0.didwh.mongodb.net/fbLogin')

            console.log('mongo db is connected')
    }
    catch(error){
        console.log(error)
    }

}

export default dbCon