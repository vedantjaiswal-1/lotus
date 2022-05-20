import nextConnect, { NextHandler } from 'next-connect';
const connectDb = require('../../../server/utils/ConnectDb');
import { NextApiRequest, NextApiResponse } from 'next';
import Transaction from '../../../server/model/Transaction';

connectDb();

const handler = nextConnect();

handler
  .get(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const transactions = await Transaction.findById(req.query.id);
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ msg: 'Server Error' });
    }
  })
  .put(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      const transaction = await Transaction.findOne({ _id: req.query.id });
      transaction.title = req.body.title;
      transaction.date = req.body.date;
      transaction.amount = req.body.amount;
      await transaction.save();
      res.send(transaction);
    } catch (error) {
      res.json({ message: 'Unable to update' });
    }
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      await Transaction.findOneAndDelete({ _id: req.query.id });
      res.json({ message: 'Transaction Deleted' });
    } catch (error) {
      res.json({ message: 'Unable to delete' });
    }
  });

export default handler;
