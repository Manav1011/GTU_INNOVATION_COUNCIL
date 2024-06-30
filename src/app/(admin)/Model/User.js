const mongoose = global.mongoose;

if (mongoose) {
    const UserSchema = new mongoose.Schema({
        user_name: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true,
            unique: true
        },
        user_contact: {
            type: String,
            required: true
        },
        user_password: {
            type: String,
            required: true
        },
        session_id: {
            type: String,
        },
        is_session_active: {
            type: Boolean,
            default: false
        }
    });

    // Export the User model or use the existing one if it already exists
    module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
}