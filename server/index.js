import dotenv from "dotenv"
dotenv.config();
const app = express()
import express from "express"
import dbConnect from "./utils/dbConnect.js"
import userRouter from "./routes/userRouter.js"



app.use(express.json())//helps in parsing the req.body data in req and res objects
//app.use(cors())//cross origin request to frontend
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("hello world")
})
console.log(process.env.CLOUDINARY_KEY)
console.log(process.env)

app.use("/api/menue",userRouter);

 


const port = process.env.PORT || 3000;
app.listen(port,async ()=>{ 
    try {
        await dbConnect();
    console.log('server started on port ',port);
    } catch (error) {
        console.log(error.message);

    }
})



