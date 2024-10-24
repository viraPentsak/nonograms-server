import expressLoader from "./express";
import mongoLoader from "./mongo";

import type {Express} from "express";

export default async function (app: Express) {

    await mongoLoader();
    await expressLoader(app);
    console.log("Express loaded!");
}