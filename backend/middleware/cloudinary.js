import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";

dotenv.config();

cloudinary.config({
  cloud_name: "dwkczyfi5",
  api_key: "256397954859414",
  api_secret: "JiMtww8E0JpfBGCmIXzZ6nne_pI",
});

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

export const uploadToCloudinary = async (req, res, next) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return next(new Error("No files provided"));
    }

    const cloudinaryUrls = [];
    const cloudinaryName = []
    for (const file of files) {
      const resizedBuffer = await sharp(file.buffer)
        .resize({ width: 800, height: 800 })
        .toBuffer();

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "your-cloudinary-folder-name",
        },
        (err, result) => {
          if (err) {
            console.error("Cloudinary upload error:", err);
            return next(err);
          }
          if (!result) {
            console.error("Cloudinary upload error: Result is undefined");
            return next(new Error("Cloudinary upload result is undefined"));
          }
          cloudinaryUrls.push(result.secure_url);
          cloudinaryName.push(result.original_filename)

          if (cloudinaryUrls.length === files.length) {
            // All files processed now get your images here
            req.body.cloudinaryUrls = cloudinaryUrls;
            req.body.cloudinaryName = cloudinaryName;

            next();
          }
        }
      );
      uploadStream.end(resizedBuffer);
    }
  } catch (error) {
    console.error("Error in uploadToCloudinary middleware:", error);
    next(error);
  }
};
