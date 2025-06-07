const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());  // Allow all origins by default, you can customize later

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


