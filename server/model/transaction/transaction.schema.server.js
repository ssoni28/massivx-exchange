var mongoose = require('mongoose');
var transactionSchema = mongoose.Schema({
  userId: {type:mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  from: String,
  to: String,
  fromAmount: String,
  toAmount: String,
  date: {type: Date, default: Date.now()}
}, {collection: 'transaction'});

module.exports = transactionSchema;
