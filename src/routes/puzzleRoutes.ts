import {Router, Response} from "express";
import {RequestWithBody} from "../types";

const router = Router();

router.get("/", (req: RequestWithBody, res: Response) => {
    res.send(`
    <div>Hello</div>
    `)
})

export default router;