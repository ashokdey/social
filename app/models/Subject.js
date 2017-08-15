'use strict';

import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  }, 
  description: {
    type: String,
    minlength: 10,
  },
  image: {
    type: String
  }
}, {timestamps: true});

export default mongoose.model('Subjects', subjectSchema);