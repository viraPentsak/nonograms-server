import express from "express";
import loaders from "./loaders";
import config from "./config";

const port = config.port;

async function startServer() {
    const app = express();
    await loaders(app);

    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    })
        .on('error', error=>{
            console.log(error.message);
            process.exit(1);
        });
}

startServer();