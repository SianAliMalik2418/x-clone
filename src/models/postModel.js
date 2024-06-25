import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    postCaption: {
      type: String,
      required: [true, "Post Caption is required"],
    },

    imgUrls: {
      type: [String],
    },

    userId: {
      type: String,
      required: [true, "User ID is required"],
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const PostModel =
  mongoose.models?.posts || new mongoose.model("posts", postSchema);
