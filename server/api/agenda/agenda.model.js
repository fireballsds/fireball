'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgendaSchema = new Schema({
  title: String,
  classification: String,
  responsibility: String,
  description: String,
  regDate: {type:Date, default: Date.now},
  dueDate: Date,
  status: String,
  cntDueDateRev: Number,
  history: [{
    title: String,
    responsibility: String,
    description: String,
    regDate: {type:Date, default: Date.now},
    dueDate: Date,
    isDueDateChange: {type:Boolean, default:false}
  }]
});

module.exports = mongoose.model('Agenda', AgendaSchema);
