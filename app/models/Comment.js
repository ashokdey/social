'use strict';

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    minlength: 3,
    required: true
  },
  commentedOn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  },
  commentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  createdAt: {
    type: Date,
    required: true
  } 
});

export default mongoose.model('Comments', commentSchema);