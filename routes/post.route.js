import express from "express";
import { getLatestPosts, getAllPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/getLatestPosts", getLatestPosts);
router.get("/getAllPosts", getAllPosts);

export default router;