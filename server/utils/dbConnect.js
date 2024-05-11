import mongoose from "mongoose"

const dbConnect = async ()=>{
    try {
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("db connected ... "))
    .catch((error)=>console.log(error))
    } catch (error) {
        console.log('error in connected the database')
    }
}

export default dbConnect;