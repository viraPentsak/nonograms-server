import express, {Application} from "express";
import bodyParser from "body-parser";

import puzzleRoutes from "./routes/puzzleRoutes";
import connectToDB from "./db";

connectToDB();

const port = process.env.PORT || 5000;
const app: Application = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(puzzleRoutes);


app.listen(port, () => {
    console.log(`Listening on port #${port}`);
});