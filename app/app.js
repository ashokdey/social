import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
   message: 'Hello User'
  })
})

app.listen(4000);