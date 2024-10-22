import {config} from "dotenv";

if (process.env.NODE_ENV !== "production") {
    config();
}

export default {
    mongoURI: process.env.MONGO_DB_URL as string
 }