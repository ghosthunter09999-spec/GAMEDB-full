import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  frequency: { type: String },
  genres: [{ type: String }],
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
