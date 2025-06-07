const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS SETUP — add this first
const allowedOrigins = ['https://portfolio-website-delta-umber.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// ✅ Allow preflight (OPTIONS) for all routes
app.options("*", cors());

app.use(express.json());

// ✅ Debug route (optional)
app.get("/", (req, res) => {
  res.send("Backend is running.");
});

// ✅ Connect to DB
const connectDB = require("./config/database");
connectDB();

// ✅ Routes
const userContact = require("./routes/contact");
app.use("/api/v1", userContact);

// ✅ Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
