const express = require("express");
const mongoose= require("mongoose");

const app = express();

app.use(express.json());

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
},{timeStamps:true})

const Users = mongoose.model("user",userSchema);


app.listen(5000,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error in connection mongodb",error);
    }

    console.log("listenning at port 5000");

});

const connect=()=>{
    return  mongoose.connect("mongodb://localhost:27017/school");
  }

