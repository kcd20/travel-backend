import express from "express";
import { getLatestPosts, getAllPosts, getPost, createNewPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/getLatestPosts", getLatestPosts);
router.get("/getAllPosts", getAllPosts);
router.get("/getPost/:id", getPost)
router.post("/createPost", createNewPost);

export default router;