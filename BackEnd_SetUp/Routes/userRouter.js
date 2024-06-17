import express from "express";
import { getUser, postUser, logUserIn } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/", postUser);

userRouter.post("/login", logUserIn);

export default userRouter;
