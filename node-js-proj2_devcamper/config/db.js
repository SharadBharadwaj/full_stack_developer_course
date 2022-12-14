const mongoose = require('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true
        // useFindAndModify: false
    });

    console.log(`MongoDB connetced: ${conn.connection.host}`);

};


module.exports = connectDB;
