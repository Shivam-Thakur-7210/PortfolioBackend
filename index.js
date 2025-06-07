const express = require("express");
const cors = require("cors");
const app = express();

const allowedOrigins = ['https://portfolio-website-delta-umber.vercel.app'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Your routes and other middleware here


require("dotenv").config();


const PORT = process.env.PORT || 3000;

const userContact = require("./routes/contact");
app.use("/api/v1", userContact)

const connectDB = require("./config/database");
connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


