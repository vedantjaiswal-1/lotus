import nextConnect, { NextHandler } from "next-connect";
const connectDb = require("../../../server/utils/ConnectDb");
import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../../server/model/Transaction";

connectDb();

const handler = nextConnect();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const transactions = await Transaction.find({});
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  })

  .post(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const transaction = new Transaction(req.body);
      await transaction.save();
      res.status(201).json(transaction);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error" });
    }
  });

export default handler;
