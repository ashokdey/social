'use strict';

import mongoose from 'mongoose';

const rolesSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, 'Role cannot be blank'],
    minlength: 3,
    unique: true
  },
  createdBy: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  actions: [{
    type: String,
    minlength: 3
  }]
}, {timestamps: true});

export default mongoose.model('Roles', rolesSchema);