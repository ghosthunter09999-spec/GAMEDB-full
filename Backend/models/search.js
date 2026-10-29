import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
  query: { type: String, required: true },
  genre: { type: String },
  platform: { type: String },
  yearFrom: { type: Number },
  yearTo: { type: Number },
  sortBy: { type: String },
});

const Search = mongoose.model("Search", searchSchema);

export default Search;
