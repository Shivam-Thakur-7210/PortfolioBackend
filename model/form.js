const mongoose = require("mongoose");


const formSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,

    },

    email:{
        type:String,
        required:true,
        trim:true
    }, 

    subject:{
        type:String,
        required:true,

    },

    message:{
        type:String,
        required:true
    },

     createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
  }
)

module.exports = mongoose.model("form", formSchema);