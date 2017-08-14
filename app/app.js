import express from 'express';
import './config/config';
import db from './db/db';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
   message: 'Hello User'
  })
})

app.listen(4000);