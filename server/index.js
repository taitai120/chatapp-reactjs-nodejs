const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5001;
const DB = process.env.MONGO_URL;

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
