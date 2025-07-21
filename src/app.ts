import express, { Request, Response } from "express";
import "dotenv/config";

const app = express()

app.get("/", (req: Request, res: Response)=> {
    res.status(200).json({message : "Welcome to kittyo tour management system UwU"})
})

export default app;