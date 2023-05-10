const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const uri = process.env.CONNECTION_STRING;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'UserContact' // Replace with your database name
    };
    await mongoose.connect(uri, options);
    console.log('Database connected successfully!');
  } catch (err) {
    console.log('Database connection error:', err);
    process.exit(1);
  }
};


module.exports = connectDb;
