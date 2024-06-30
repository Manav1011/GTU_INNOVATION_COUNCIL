const mongoose = global.mongoose
const User = new mongoose.Schema(
    {
        user_name : {
            type : String,
            required : true
        },
        user_email : {
            type : String,
            required : true,
            unique : true 
        },
        user_contact : {
            type : String,
            required : true
        },
        user_password : {
            type : String,
            required : true,
        },
        session_id : {
            type : String,
        },
        is_session_active : {
            type : String,
            default : false
        }
    }
);
export default mongoose.models.User || mongoose.model("User", User);


