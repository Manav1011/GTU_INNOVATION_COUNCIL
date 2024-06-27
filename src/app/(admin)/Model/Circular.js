import mongoose from "mongoose";

const Circular  = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    data : {
        type : String, 
        required : true
    },
    attechment : {
        type : String,
        required: true
    }
})

export default mongoose.model.Circular || mongoose.model("Circular",Circular)