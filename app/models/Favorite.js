'use strict';

import mongoose from 'mongoose';

const favSchema = new mongoose.Schema({
  answerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  time: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model('Favorites', favSchema);