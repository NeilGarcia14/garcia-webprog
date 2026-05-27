const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  const options = {
    dbName: process.env.MONGO_DB_NAME || 'garcia-client',
    serverSelectionTimeoutMS: Number(process.env.MONGO_TIMEOUT_MS) || 10000,
  };

  if (!mongoUri) {
    throw new Error('MONGO_URI is missing from the environment');
  }

  try {
    await mongoose.connect(mongoUri, options);
  } catch (error) {
    if (!process.env.MONGO_DIRECT_URI) throw error;

    console.warn(`MongoDB SRV connection failed: ${error.message}`);
    console.warn('Trying direct MongoDB seed list...');

    await mongoose.connect(process.env.MONGO_DIRECT_URI, options);
  }

  console.log('MongoDB connected');
};

module.exports = connectDB;
