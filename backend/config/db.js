const mongoose = require('mongoose');

const connectDB = async () => {
 try {
    const conss = await mongoose.connect(process.env.MONGODB_DB)
    console.log(`MongoDB Connected: ${conss.connection.host}`.cyan.underline);
 } catch (error) {
    console.error(error)
    process.exit(1)
 }
}

module.exports = connectDB;