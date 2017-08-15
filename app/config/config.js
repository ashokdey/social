'use strict';

/**
 * This file contains all the  different configurations that are required
 * for the app to function
 */

// store the environment details
const environment = process.env.NODE_ENV || 'development';

/**
 * Check if the enviromnet is development or not
 * If development then set the port to 8000
 * and also set the MongoDB URIto local machine
 * 
 * If the environment is Test then set the 
 * port to 8000 and 
 * the MongoDB URI to the test DB  in local machine
 */
if(environment === 'development'){
  process.env.PORT = 8000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/Qurious';
}
else if(environment === 'test'){
  process.env.PORT = 8000;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/QuriousTest';
  console.log('***DATABASE :', process.env.MONGODB_URI);
}

console.log('***Working environment is: ', environment);