import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (loacalFilePath) => {
  try {
    if (!loacalFilePath) return null;

    //* Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(loacalFilePath, {
      resource_type: "auto",
    });

    //* File has been uploaded successfully
    // console.log("File has been uploaded successfully", response.url);

    fs.unlinkSync(loacalFilePath);
    return response;
  } catch (error) {
    // Upload operation is failed 
    // Remove the locally saved temporary file
    fs.unlinkSync(loacalFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
