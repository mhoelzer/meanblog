'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Post title',
    // trim the field
    trim: true
  },
  author:{
    type: String,
    default: '',
    required: 'Please fill Post author',
    trim: true
  },
  body: {
    type: String,
    default: '',
    required: 'Please fill Post body',
    trim: true
  },
  tags: {
    type: String,
    default: '',
    trim: true
  },
  song: {
    type: String,
    default: '',
    trim: true
  },
  artist: {
    type: String,
    default: '',
    trim: true
  },
  url: {
    type: String,
    default: '',
    trim: true
  },
  // category: {
  //   type: String,
  //   default: '',
  //   required: 'Please fill Post category',
  //   trim: true
  // },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Post', PostSchema);
