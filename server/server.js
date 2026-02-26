import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));