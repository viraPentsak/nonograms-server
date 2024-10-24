import {config} from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envVars = config();

if (envVars.error) {
    throw new Error("No .env file found!");
}

export default {
    port: parseInt((process.env.PORT as string), 10),
    mongoURI: process.env.MONGO_DB_URL as string
 }