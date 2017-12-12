var mongoose = require('mongoose');
var ticketSchema = mongoose.Schema({
  userId: {type:mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  type: String
}, {collection: 'ticket'});

module.exports = ticketSchema;
