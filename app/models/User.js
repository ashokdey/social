'use strict';

/**
 * This file contains the USER Schema to store user data
 * the different fields in the user schema and their type
 */

// import mongoose to make schema 
import mongoose from 'mongoose';

const GENDERS = ['Male', 'Female', 'Other'];

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Name cannot be blank'],
    trim: true,
    validate : /^[a-zA-Z ]{5,30}$/
  },
  username: {
    type: String,
    minlength: 5,
    maxlength: 15,
    lowercase: true,
    unique: true
  },
  email: {
    type: String,
    required:[true, 'Email cannot  be blank'],
    unique: true,
    minlength: 5,
    trim: true,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  password: {
    type: String,
    required: [true, 'Password  cannot be blank'],
    minlength: 5,
    trim: true
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  profile: {
    bio: {
      type: String,
      minlength: 5,
      maxlength: 55
    },
    website: {
      type: String,
      validate: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    },
    age: {type: Number},
    gender: {type: String, enum: GENDERS},
    images: [{
      url: String
    }],
    education: [{
      educationType: String,
      details: {
        major: String,
        degree: String,
        start: Date,
        end: Date
      }
    }],
    experience: [{
      type: String,
      position: String,
      company: String,
      joined: Date,
      left: Date,
      location: String,
      description: String
    }],
    address: [{
      type: String,
      country: String,
      city: String,
      from: Date,
      to: Date
    }]
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roles'
  }]
}, {timestamps: true});

export default mongoose.model('Users', userSchema);