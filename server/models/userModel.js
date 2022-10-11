const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Username is required"],
        },
        email: {
            type: String,
            require: [true, "Email is required"],
        },
        password: {
            type: String,
            require: [true, "Password is required"],
        },
        passwordConfirm: {
            type: String,
            require: [true, "Password confirm is required"],
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
