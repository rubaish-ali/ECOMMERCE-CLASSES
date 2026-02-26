import express from "express";
const router = express.Router();
import Product from "../model/Product.js";


// CREATE
router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// GET ALL
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
});

export default router