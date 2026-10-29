import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  gameTitle: { type: String, required: true },
  rating: { type: Number, required: true },
  platform: { type: String },
  hoursPlayed: { type: Number },
  recommend: { type: String },
  notes: { type: String },
});

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
