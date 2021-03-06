'use strict';

/**
 * Require mongoose andmake connection
 * After making the connection export the file and 
 * use it for firing queries
 */

import  mongoose from 'mongoose';

// set the default nodejs promise library for mongosse 
mongoose.Promise = global.Promise;

// set the options object for MongoDB connection 
const connectionOptions = {
  useMongoClient: true,
  poolSize: 10
}

// connect to the db using mongoose and setpool option to 10 
mongoose.connect(process.env.MONGODB_URI, connectionOptions);

// console log on connection to DB
// mongoose.connection.on('connected', () => console.log('Connected to Database'));

// console log the error while connecting to the DB
mongoose.connection.on('error', (error) => console.log('**ERROR in connecting to db. Error: ', error));

// on disconnect from the DB, console log a message
mongoose.connection.on('disconnected', () => console.log('Disconnected from database'));

/**
 * on SIGINT which is actuallt POSIX fro app termination,
 * close all the DB connection and exit the process with a negetive value.
 * Also give a console log for the same
 */
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('**Closing DB connection due to SIGINT');
    process.exit(-1);
  })
});

export default mongoose;