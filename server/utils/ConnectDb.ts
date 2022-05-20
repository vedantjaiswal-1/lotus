import mongoose from 'mongoose';
import colors from 'colors'

colors.enable()
async function connectDb() {
  try {
    const URL: string = process.env.MONGO_URL!;
    await mongoose.connect(URL);
    console.log('Connected to MongoDB'.green.bold);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
