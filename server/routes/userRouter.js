import express from "express"
import multer from "multer";
const userRouter = express.Router()
import Menue from "../models/menue.js";
import storage from "../utils/cloudinary.js";

const upload = multer({ storage })


userRouter.post("/upload-menue", upload.single("file"), async function (req, res) {
    //get the title desc and price from req.body
    const { title, description, price } = req.body;
    console.log(req.file)
    try {
        if (!title || !description || !price || !req.file) {
            res.status(401).json({
                status: false,
                message: "all fields are required"
            })
        }
        //check if the title is alredy present
        const existingMenue = await Menue.findOne({ title });
        if (existingMenue) {
            return res.status(401).json({
                status: false,
                message: "the menue is already present"
            })
        }
        //if not present the just add it to the databse
        const newMenue = await Menue.create({
            title: title,
            description: description,
            price: price,
            image: req.file.path
        })
        res.status(201).json({
            status: true,
            messgae: "menue added successfully",
            data: newMenue
        })


    } catch (error) {
        res.status(500).json({
            status: false,
            messgae: error.message,
            stack: error.message
        })
    }
})

userRouter.get("/all-menue", async function (req, res) {
    //getting the all the menues from the databses
    try {
        const response = await Menue.find();
        res.status(201).json({
            status: true,
            message: "menue fetched successfully",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
})

export default userRouter;


//router to delete the menue 
userRouter.delete("/delete/:id",async(req,res,next)=>{
    const id = req.params.id;
    try {
       const found = await Menue.findByIdAndDelete(id);
       return res.status(200).json({
        status:true,
        message:"Menue deleted Successfully"
       })

    } catch (error) {
      return  res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
})