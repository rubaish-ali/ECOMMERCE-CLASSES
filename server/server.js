import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productModel from "./model/Product.js"
dotenv.config();

import bcrypt from "bcrypt"

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/register", async (req, res) => {
  try {
    // password hash password 
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone
    })
    res.json({
      message: "User registered!",
      data: user
    })

  } catch (error) {
    console.log(error)
  }
})
app.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email })
    if (user) {
      const comparePasswd = await bcrypt.compare(req.body.password, user.password) // true //false

      if (comparePasswd === false) {
        res.status(400).json({
          message: "email and password is not correct!"
        })
      } else {
        res.json({
          message: "User succesfully login!",
          data: user
        })
      }
    } else {
      res.status(400).json({
        message: "email and password is not correct!"
      })
    }

  } catch (error) {
    console.log(error)
  }
})

app.get("/getAllUsers", async (req, res) => {
  try {

    const users = await userModel.find()
    res.json({
      data: users
    })
  } catch (error) {
    console.log(error)
  }
})

app.get("/getAllProducts", async (req, res) => {
  try {
    const products = await productModel.find()
    res.json({
      data: products
    })
  } catch (error) {
    console.log(error)

  }
})
app.post("/createProduct", async (req, res) => {
  try {
    let body = req.body
    console.log(body);
    await productModel.create(body)
    res.send("Product Created Succesfully!")

  } catch (error) {
    console.log(error);

  }
})
app.delete("/deleteProduct/:id", async (req ,res)=>{
  try{
    let id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.send("product delete sucessfully")
  }catch (error){
     console.log(error)
  }
  
})

app.listen(8080, () => console.log("Server running on port 8080"));

