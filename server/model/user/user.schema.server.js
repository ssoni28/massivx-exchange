var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  follows: [{type:mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  followedBy: [{type:mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  bitcoinwallets: [{type:mongoose.Schema.Types.ObjectId, ref: 'WalletModel'}],
  litecoinwallets: [{type:String}],
  roles: [{
    type: String,
    enum: ['ADMIN', 'EXCHANGEUSER', 'SUPPORTUSER']
  }]
}, {collection: 'user'});

module.exports = userSchema;
