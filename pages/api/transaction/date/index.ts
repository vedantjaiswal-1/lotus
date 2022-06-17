import nextConnect, { NextHandler } from "next-connect";
const connectDb = require("../../../../server/utils/ConnectDb");
import { NextApiRequest, NextApiResponse } from "next";
import Transaction from "../../../../server/model/Transaction";

connectDb();

const handler = nextConnect();

handler.get(async (req: any, res: NextApiResponse, next: NextHandler) => {
  try {
    let filters: any = {};

    let title = req.query.title;
    let start = req.query.start;
    let end = req.query.end;

    if (title && start && end) {
      filters = await Transaction.find({
        $and: [
          { date: { $gte: start, $lte: end } },
          { title:title },
        ],
      }).sort({ _id: -1 });
    } else if (title || start || end) {
      filters = await Transaction.find({
        $or: [
          { date: { $gte: start, $lte: end } },
          { title: title },
        ],
      }).sort({ _id: -1 });
    }

    res.status(200).json(filters);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default handler;
