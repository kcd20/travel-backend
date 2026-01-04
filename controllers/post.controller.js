
import Post from "../models/post.model.js";

// For the home page
export const getLatestPosts = async (req, res) => {
  try {
    const posts = await Post
      .find()
      .sort({ createdOn: -1 })
      .limit(4);

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch latest posts" });
  }
};

// To see all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

export const createNewPost = async (req, res) => {
  try {
    const { title, coverImage, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newPost = await Post.create({
      createdOn: new Date().toISOString(),
      title,
      description,
      coverImage: {
        url: coverImage.url,
        publicId: coverImage.publicId,
        fileName: coverImage.fileName,
      },
    });

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}