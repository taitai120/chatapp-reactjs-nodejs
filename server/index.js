const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5001;
const DB = process.env.MONGO_URL;

app.use(cors());
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
