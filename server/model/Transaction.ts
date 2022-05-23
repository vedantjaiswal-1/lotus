import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    created_by: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
