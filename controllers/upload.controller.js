import cloudinary from '../config/cloudinary.js'

export const uploadImageFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" })
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads", resource_type: "image" },
        (error, result) => {
          if (error) return reject(error)
          resolve(result)
        }
      )

      stream.end(req.file.buffer)
    })

    res.status(200).json({
      url: result.secure_url,
      public_id: result.public_id,
    })
  } catch (err) {
    console.error("Cloudinary upload error:", err)
    res.status(500).json({ error: err.message })
  }
}

export const deleteImageFile = () => async (req, res) => {
  try {
    const { public_id } = req.params;
    await cloudinary.uploader.destroy(public_id);
    res.status(200).json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
