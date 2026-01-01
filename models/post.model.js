import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({
  createdOn: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("posts", postSchema);
