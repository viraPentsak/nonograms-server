import mongoose from "mongoose";
import config from "../config";

export default async function () {
    mongoose.connect(config.mongoURI)
        .then(() => {
            console.log("Connection established");
        })
        .catch((e) => {
            console.log("Error! ", e.message);
        })
}