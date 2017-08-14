'use strict';

import mongoose from 'mongoose';

const answerSchema = mongoose.Schema({
  answerBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Users',
    unique: true,
    required: true
  },
  answerTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    unique: true,
    required: true
  }, 
  answer:{
    type: String,
    minlength: 5,
    required: true
  },
  kudos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  hearts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  downs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  createdAt: {
    type: Date,
    required: true
  } 
});

export default mongoose.model('Answers', answerSchema);