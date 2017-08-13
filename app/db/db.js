'use strict';

/**
 * Require mongoose andmake connection
 * After making the connection export the file and 
 * use it for firing queries
 */

import  mongoose from 'mongoose';

// set the mongoose promise to use the default ES6 promise 
mongoose.Promise = global.Promise;

// connect to thedb using mongoose and setpool option to 10 
mongoose.connect(process.env.MONGODB_URI, { 
  server: {
    poolSize: 10
  }
});

export default mongoose;