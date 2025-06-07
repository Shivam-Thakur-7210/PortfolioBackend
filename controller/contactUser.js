
const mongoose = require("mongoose");

const Form = require("../model/form");

// define handler 

exports.contactUser = async (req,res)=>{
    try{
        const {name,email,subject, message} = req.body;
        // checking validatioon
        if(!name || !email ||!subject || !message){
            console.log("please fill all required fields")
            return res.status(400).json({
                message:"please fiil all deatails",
                status: 400,
            })
        }

    //    sending message 
        const formData = await Form.create({
            name, email, subject,message
        })

         return res.status(200).json({
            status: 201,
            message: "data send  successfully",
            data: formData,
            });




    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
        status: 500,
        message: error.message,
        });
}
}