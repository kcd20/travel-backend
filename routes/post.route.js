import express from "express";
import { getLatestPosts, getAllPosts, createNewPost } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/getLatestPosts", getLatestPosts);
router.get("/getAllPosts", getAllPosts);
router.post("/createPost", createNewPost);

export default router;