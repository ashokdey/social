'use strict';

// import mongoose 
import mongoose from 'mongoose';

const questionSchema = new  mongoose.Schema({
  title: {
    type: String,
    required:true,
    unique:true,
    minlength: 10
  },
  description: {
    type: String,
    minlength: 5
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  askedOn: {
    type: Date
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects'
  }]
});

export default mongoose.model('Questions', questionSchema);