'use strict';

// import mongoose 
import mongoose from 'mongoose';

const questionSchema = new  mongoose.Schema({
  title: {
    type: String,
    required:true,
    unique:true
  },
  description: {
    type: String
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }],
  askedOn: {
    type: Date
  }, 
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers'
  }] 
});

export default mongoose.model('Questions', questionSchema);