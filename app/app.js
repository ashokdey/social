import express from 'express';
import './config/config';
import db from './db/db';
import User from  './models/User';
import data from './models/dummy-data/users';

const app = express();

// try to save data in the DB 
let demoUser = new User(data.user);
demoUser.save()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.errmsg));

app.get('/', (req, res) => {
  res.status(200).json({
   message: 'Hello User'
  })
})

app.listen(4000);