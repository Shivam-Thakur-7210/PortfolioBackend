const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS setup
const allowedOrigins = ['https://portfolio-website-delta-umber.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Your routes and other middleware here


require("dotenv").config();

// ✅ Handle preflight globally
app.options("*", cors());

const PORT = process.env.PORT || 3000;

const userContact = require("./routes/contact");
app.use("/api/v1", userContact)
app.use(express.json());

// ✅ Connect to DB
const connectDB = require("./config/database");
connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

