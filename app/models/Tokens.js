'use strict';

import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique: true
  }, 
  tokens: [{
    accessType:{
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    },
    issuedOn: {
      type: Date,
      required: true
    }
  }]
});

export default mongoose.model('Tokens', tokenSchema);