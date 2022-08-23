const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');

const connectDB = require('./config/db');
const { response } = require("express");


//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to DB
connectDB();

// Routes files
const bootcamps = require('./routes/bootcamps.js');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
    );

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server and exit process
    server.close(() => process.exit(1));
});