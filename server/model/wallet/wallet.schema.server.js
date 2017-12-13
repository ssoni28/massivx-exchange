var mongoose = require('mongoose');
var walletSchema = mongoose.Schema({
  userId: {type:mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  address: String,
  privateKey: String
}, {collection: 'wallet'});

module.exports = walletSchema;
