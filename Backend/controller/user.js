import model from "../models/users.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await model.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new model({
      name,
      email,
      password: hashPassword,
    });
    await createUser.save();
    res.status(200).json({
      message: "User Created Successfully",
      user: {
        _id: createUser._id,
        name: createUser.name,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    } else {
      res.status(200).json({
        message: "Login Successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Inncorect Email or Password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
