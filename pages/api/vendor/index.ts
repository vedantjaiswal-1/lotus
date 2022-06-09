import nextConnect, { NextHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import Vendor from "../../../server/model/Vendor";
const connectDb = require("../../../server/utils/ConnectDb");

connectDb();

const handler = nextConnect();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const vendors = await Vendor.find({});
      res.status(200).json(vendors);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  })

  .post(
    async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
      try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json(vendor);
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
      }
    }
  );

export default handler;
