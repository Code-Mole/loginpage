import express from "express";
import { getUser, postUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/", postUser);

export default userRouter;
