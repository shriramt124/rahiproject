import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary';
 
 


//configure cloudinary
cloudinary.config({
    cloud_name:'dfk3zo6p6',
    api_key: 412838331359398,
    api_secret: '1V_e-Zq8PHu1u4ysVKjFCbogNvg'
})

//create the instance of cloudinary storage

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'jpeg', "png"],
    params: {
        folder: "blog-ram",
        transformations: [{ width: 500, height: 500, crop: "limit" }]
    }
})

export default storage;
