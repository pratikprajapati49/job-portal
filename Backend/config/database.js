const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connection successfull"))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
}

module.exports = dbConnect;