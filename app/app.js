import express from 'express';
import './config/config';
import db from './db/db';

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log('App running at: http://localhost:', PORT)
});