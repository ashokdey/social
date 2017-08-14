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
    required: true,
    trim: true,
    validate : /^[a-zA-Z ]{5,30}$/
  },
  username: {
    type: String,
    minlength: 5,
    maxlength: 15,
    unique: true
  },
  email: {
    type: String,
    required:true,
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
    required: true,
    minlength: 5,
    trim: true
  },
  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isVerified: {
    type: Boolean,
    required: true
  },
  profile: {
    bio: {
      type: String,
      minlength: 5,
      maxlength: 55
    },
    website: {
      type: String,
      validate: /@^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$@i/
    },
    age: {type: Number},
    gender: {type: String, enum: GENDERS},
    images: [{
      url: String
    }],
    education: [{
      type: String,
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
  } 
});

export default mongoose.model('User', userSchema);