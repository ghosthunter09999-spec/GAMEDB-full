import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  gameTitle: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  parentId: { type: String },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
