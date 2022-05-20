import nextConnect, { NextHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../server/model/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDb = require("../../../server/utils/ConnectDb");

connectDb();

const login = nextConnect();

login.post(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ status: 400, message: "Invalid email id." });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send({ status: 400, message: "Invalid Password." });

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default login;
