import nextConnect, { NextHandler } from "next-connect";
const connectDb = require("../../../../server/utils/ConnectDb");
import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../../../server/model/Transaction";

connectDb();

const handler = nextConnect();

handler.get(
  async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const transactions = await Transaction.find({
        $and: [
          { date: { $gte: req.query.start, $lte: req.query.end } },
          { title: req.query.title },
        ],
      }).sort({ _id: -1 });
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

export default handler;
