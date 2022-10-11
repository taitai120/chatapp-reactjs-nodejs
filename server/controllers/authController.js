const User = require("../models/userModel");

const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        if (user) {
            return res.status(201).json({
                status: "success",
                data: user,
            });
        }
    } catch (err) {
        return res.status(500).json({
            status: "failed",
            message: err.message,
        });
    }
};

module.exports = {
    registerUser,
};
