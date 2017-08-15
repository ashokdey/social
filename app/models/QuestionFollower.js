'use strict';

import mongoose from  'mongoose';

const questionFollowersSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required:true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  followedOn: {
    type: Date,
    required: true
  }
});

// creating compund index - similar to composite primary key 
questionFollowersSchema.index({
  questionId: 1,
  userId: 1
}, { unique: true });

export default mongoose.model('QuestionFollowers', questionFollowersSchema);