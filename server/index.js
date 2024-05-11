import dotenv from "dotenv"
import express from "express"
import dbConnect from "./utils/dbConnect.js"
const app = express()
import userRouter from "./routes/userRouter.js"


dotenv.config();
app.use(express.json())//helps in parsing the req.body data in req and res objects
//app.use(cors())//cross origin request to frontend

app.get("/",function(req,res){
    res.send("hello world")
})

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



