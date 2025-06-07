const express = require("express");
const router = express.Router();

const { contactUser } = require('../controller/contactUser');


router.post("/contact", contactUser);
router.get("/", (req,res)=>{
    res.send("welcome to the portfolio")
});



module.exports = router