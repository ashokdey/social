'use strict';

import mongoose from 'mongoose';

const kudosSchema = new mongoose.Schema({
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

export default mongoose.model('Kudos', kudosSchema);