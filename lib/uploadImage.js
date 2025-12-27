import cloudinary from "cloudinary";

const uploadImage = async (imagePath) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    const newImage = new Image({
      url: result.secure_url, // Store the image URL
      public_id: result.public_id, // Store the Cloudinary public ID
    });
    await newImage.save();
    console.log("Image uploaded and saved to MongoDB:", newImage);
  } catch (err) {
    console.error("Error uploading image:", err);
  }
};

export default uploadImage