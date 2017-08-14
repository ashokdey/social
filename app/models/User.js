'use strict';

/**
 * This file contains the USER Schema to store user data
 * the different fields in the user schema and their type
 */

// import mongoose to make schema 
import mongoose from 'mongoose';

const GENDERS = ['Male', 'Female'];

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    minlength: 8,
    trim: true
  },
  email: {
    type: String,
    required:true,
    minlength: 5,
    trim: true
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
    age: {type: Number},
    gender: {type: String, enum: GENDERS},
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

export default  mongoose.model('User', userSchema);