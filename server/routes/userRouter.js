import express from "express"
const userRouter = express.Router()
import Menue from "../models/menue.js";



userRouter.post("/upload-menue",async function(req,res){
    //get the title desc and price from req.body
    const {title,description,price} = req.body;
    try {
        if(!title ||!description || !price){
            res.status(401).json({
                status:false,
                message:"all fields are required"
            })
        }
        //check if the title is alredy present
        const existingMenue = await Menue.findOne({title});
        if(existingMenue){
            res.status(401).json({
                status:false,
                message:"the menue is already present"
            })
        }
        //if not present the just add it to the databse
        const newMenue = await  Menue.create({
            title:title,
            description:description,
            price:price
        })
        res.status(201).json({
            status:true,
            messgae:"menue added successfully",
            data:newMenue
        })
        
        
    } catch (error) {
        res.status(500).json({
            status:false,
            messgae:error.message
        })
    }
})

userRouter.get("/all-menue",async function(req,res){
    //getting the all the menues from the databses
try {
  const response = await Menue.find();
   res.status(201).json({
    status:true,
    message:"menue fetched successfully",
    data:response
   })
} catch (error) {
    res.status(500).json({
        status:false,
        message:error.message,
        stack:error.stack
    })
}
})

export default userRouter;