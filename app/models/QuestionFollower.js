'use strict';

import mongoose from  'mongoose';

const questionFollowersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required:true
  }
});

export default mongoose.model('QuestionFollowers', questionFollowersSchema);