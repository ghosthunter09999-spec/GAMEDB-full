import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  gameTitle: { type: String, required: true },
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  review: { type: String, required: true },
  spoilers: { type: Boolean, default: false },
  platform: { type: String },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
