import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true,
        default: "user",
        enum: ["user", "admin"]
    }
});

const User = model("Users", userSchema);
export default User;
