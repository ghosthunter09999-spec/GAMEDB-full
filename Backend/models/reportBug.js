import mongoose from "mongoose";

const reportBugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  severity: { type: String },
  page: { type: String },
  description: { type: String, required: true },
  steps: { type: String },
  email: { type: String, required: true },
  browser: { type: String },
});

const ReportBug = mongoose.model("ReportBug", reportBugSchema);

export default ReportBug;
