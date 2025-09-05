import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res , next) => {
  // console.log(req.body);
  const { username, email, password } = req.body;

  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    // return res.status(400).json({ message: "All fields are required." });
    // with middlerware
    next(errorHandler(400,'All fields are required'))
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    // it make a new user
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
