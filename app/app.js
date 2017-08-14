import express from 'express';
import './config/config';
import db from './db/db';
import User from  './models/User';
import data from './models/dummy-data/users';

const PORT = process.env.PORT;
const app = express();

let user = data.user;
user.profile = data.userProfile;
// try to save data in the DB 
let demoUser = new User(user);
demoUser.save()
  .then((data) => console.log(data))
  .catch((err) => console.log('**Error: ', err));



app.listen(PORT, () => {
  console.log('App running at: http://localhost:', PORT)
});