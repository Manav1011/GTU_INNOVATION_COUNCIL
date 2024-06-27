import mongoose from "mongoose";

const Quout = mongoose.Schema({
    content : {
        type : String,
        requried : true
    },
    author : {
        type :String,
        required : true
    },
    designation : {
        type : String,
        required : true
    }
})

export default mongoose.model.Quout || mongoose.model("Quout",Quout)