import express from "express"
// Env = Enviroment Variabe // dotenv
import dotenv from "dotenv"
// pehchan lta he konsi file .env ki he or us file ka data har files me phuncha deta he
dotenv.config()
import userModel from "./model/user.js"
import productModel from "./model/product.js"
import connectDB from "./config/db.js"
import bcrypt from "bcrypt"
import cors from "cors"
const app = express()


// take api se data wo convert json me karde
app.use(express.json())
app.use(cors())

connectDB()
// Port Jisme Hamara Server listen karahah hota he
const PORT = 8080


// Making Api's
// Register POST
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

app.get("/getAllProducts",async (req,res) =>{
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

app.listen(PORT, () => {
    console.log("Server is running!")
})