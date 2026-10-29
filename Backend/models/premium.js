import mongoose from "mongoose";

const premiumSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  plan: { type: String, required: true },
});

const Premium = mongoose.model("Premium", premiumSchema);

export default Premium;
