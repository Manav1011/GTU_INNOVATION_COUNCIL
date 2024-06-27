import mongoose from "mongoose";

const Startups = mongoose.Schema({
    title :{
        type : String,
        required : true,
        unique : true
    },
    count : {
        type : String,
        required : true
    },
})

export default mongoose.models.Startups || mongoose.model("Startups", Startups);