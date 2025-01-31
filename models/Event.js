var mongoose = require('mongoose');

var Slot = new mongoose.Schema({
  title: { type: String, default: null },
  description: { type: String, default: null },
  duration: { type: Number, default: null },
  contact: { type: String, default: null },
  id: { type: Number, default: null },
});

var Exhibit = new mongoose.Schema({
  title: { type: String, default: null },
  description: { type: String, default: null },
  contact: { type: String, default: null },
  id: { type: Number, default: null },
});

var Event = new mongoose.Schema({
  klangkellerID: String,
  date: Date,
  time: { type: String, default: '20:00' },
  venue: { type: String, default: '' },
  contact: { type: String, default: null },
  slotNumber: { type: Number, default: 3 },
  slotLengths: { type: Array, default: [40, 30, 10] },
  exhibit: Exhibit,
  slots: [Slot],
  documentation: {
    name: { type: String, default: null },
    contact: { type: String, default: null },
  },
  bar: {
    name: { type: String, default: null },
    contact: { type: String, default: null },
  },
  isFestival: false,
  isRoaming: false,
  hasExhibit: false,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', Event);
