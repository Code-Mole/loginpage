import express from "express";
import "./Models/db.js";
import userRouter from "./Routes/userRouter.js";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
server.use("/api/users", userRouter);

const Port = 5030;
server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
