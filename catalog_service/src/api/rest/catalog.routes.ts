import express, { NextFunction, Request, Response } from "express";

const catalogrouter = express.Router();

catalogrouter.post(
  "/product",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({});
  }
);

export default catalogrouter;
