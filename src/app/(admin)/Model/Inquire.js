import mongoose, { Mongoose } from "mongoose";

const Inquire = mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    message : {
        type : String,
        requried : true
    }
})

export default mongoose.model.Inquire || mongoose.model("Inquire",Inquire)