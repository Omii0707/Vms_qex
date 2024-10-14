import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, error: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "Wront Password" });
    }

    const token = jwt.sign(
      { _id: user._id, userType: user.userType },
      process.env.KEY,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, username: user.username, userType: user.userType },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false,error:error.message})
  }
};

export {login};