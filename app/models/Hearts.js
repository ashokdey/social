'use strict';

import mongoose from 'mongoose';

const heartSchema = new mongoose.Schema({
  answerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  },
  users : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  count: Number
});

export default mongoose.model('Hearts', kudosSchema);