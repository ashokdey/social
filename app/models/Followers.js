'use strict';

import mongoose from  'mongoose';

const followersSchema = new mongoose.Schema({
  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required:true,
    unique: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date
  }
});

// creating compund index - similar to composite primary key 
followersSchema.index({
  followee: 1,
  follower: 1
}, { unique: true });

export default mongoose.model('Followers', followersSchema);