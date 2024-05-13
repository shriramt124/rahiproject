import dotenv from "dotenv"
dotenv.config();
const app = express()
import express from "express"
import dbConnect from "./utils/dbConnect.js"
import userRouter from "./routes/userRouter.js"
import cors from "cors"


app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from example.com
    methods: ['GET', 'POST','PUT','DELETE'], // Allow only GET and POST  and DELETE requests
    credentials: true, // Allow sending cookies and authorization headers
  }));
app.use(express.json())//helps in parsing the req.body data in req and res objects
 
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



