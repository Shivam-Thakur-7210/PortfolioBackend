const mongoose = require('mongoose');
require("dotenv").config;


const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })

    .then("mongoDB coneected successfully ")

    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
   
    
}

module.exports= connectDB;