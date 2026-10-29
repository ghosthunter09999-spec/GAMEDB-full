import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import formRoutes from "./Routes/formRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Form routes
app.use("/forms", formRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://ghosthunter09999_db_user:Mohsin1234@cluster0.hdy7gub.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default app;
