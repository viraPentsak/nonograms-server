import type {Express} from "express";
import express from "express";

export default function (app: Express) {
    app.get("/status", (req, res) => {
        res.sendStatus(200).end();
    })

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
}