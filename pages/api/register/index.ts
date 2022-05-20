import nextConnect, { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../server/model/User';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ConnectDb = require("../../../server/utils/ConnectDb")

ConnectDb()
const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
  try {
    const emailExist = await User.findOne({
      email: req.body.email
    });

    if (emailExist) {
      return res.status(400).json({ message: 'Email already exist.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default handler;
