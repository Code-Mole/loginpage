import userModel from "../Models/userSchema.js";
import bcrypt from "bcrypt";

const getUser = async (req, res) => {
  // res.send("Get User is working");
  try {
    const data = await userModel.find();
    res.status(200).json({ data: data, message: "users displayed" });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};

const postUser = async (req, res) => {
  // res.send("Post User is working");
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    res.status(201).json({ message: "Data is inserted", user });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
};

export { getUser, postUser };
