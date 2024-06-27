import mongoose from "mongoose";

const Partners = mongoose.Schema({
    logo : {
        type : String,
        required: true,
    },
    title : {
        type : String,
        required : true
    },
    about : {
        type : String,
        required : true
    }
})

export default mongoose.model.Partners || mongoose.model("Partners",Partners)