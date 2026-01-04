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
    url: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("posts", postSchema);
