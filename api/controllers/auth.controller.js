import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

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


export const signin = async (req ,res, next) =>{
  const {email , password } =req.body;

  if(!email || !password || email ==='' || password ==='' ){
    next(errorHandler(400,'All fields are required'))
  }

  try {
    const validUser = await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,' User not found'))
    }
    const validPassword = bcrypt.compareSync(password,validUser.password);
    if(!validPassword){
      return next(errorHandler(400, 'Invalid password'))
    }
    const token = jwt.sign(
      {id:validUser._id}, process.env.JWT_SECRET
    )

    const{password: pass, ...rest} = validUser._doc;

    res.status(200).cookie('access_token' , token, {
      httpOnly:true
    }).json(rest)
  } catch (error) {
    next(error)
  }
}
