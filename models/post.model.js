
import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    createdOn: {
      type: String,
      required: true,
    },
    title: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: false,
    },
  },
);

export default mongoose.model("Post", postSchema);
