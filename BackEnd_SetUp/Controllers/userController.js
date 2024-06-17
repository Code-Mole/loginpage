import userModel from "../Models/userSchema.js";

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
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(201).json({ message: "Data is inserted", user });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
};

export { getUser, postUser };
