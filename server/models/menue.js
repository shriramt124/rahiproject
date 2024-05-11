import mongoose from "mongoose";

const menueSchema = new mongoose.Schema({
    title:{
      type:String,
      required:[true,'title must be required']
    },
    description:{
type:String,
required:[true,'desc is requried']
    },
    price:{
     type:Number,
     required:true
    } 

})

const Menue = mongoose.model('Menue',menueSchema);

export default Menue;
