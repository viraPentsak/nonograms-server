import mongoose from "mongoose";
import keys from "./config/keys";

const URI = keys.mongoURI;

const connectToDB = () => {
    mongoose.connect(URI)
        .then(() => {
            console.log("Connection established");
        })
        .catch((e) => {
            console.log("Error! ", e.message);
        })
}

export default connectToDB;