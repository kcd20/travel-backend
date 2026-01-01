
import Post from "../models/post.model.js";
import { randomUUID } from "crypto";

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
