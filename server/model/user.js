import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : Number
})

const userModel = mongoose.model("users", userSchema)

export default userModel