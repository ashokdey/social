'use strict';

import mongoose from  'mongoose';

const questionFollowersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required:true,
    unique: true
  }
});

export default mongoose.model('QuestionFollowers', questionFollowersSchema);