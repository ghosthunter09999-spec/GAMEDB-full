import mongoose from "mongoose";

const suggestGameSchema = new mongoose.Schema({
  gameTitle: { type: String, required: true },
  developer: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
  platforms: [{ type: String }],
  reason: { type: String, required: true },
  email: { type: String, required: true },
});

const SuggestGame = mongoose.model("SuggestGame", suggestGameSchema);

export default SuggestGame;
