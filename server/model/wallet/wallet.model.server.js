var walletSchema = require('./wallet.schema.server');
var mongoose = require('mongoose');
var walletModel = mongoose.model("WalletModel", walletSchema);
var UserModel = require("../user/user.model.server");

walletModel.createWalletForUser = createWalletForUser;
walletModel.findAllWalletsForUser = findAllWalletsForUser;
/*walletModel.findUserById = findUserById;
walletModel.findAllUsers = findAllUsers;
walletModel.findUserByCredentials = findUserByCredentials;
walletModel.findUserByUsername = findUserByUsername;
walletModel.updateUser = updateUser;
walletModel.deleteUser = deleteUser;
*/
module.exports = walletModel;

function createWalletForUser(userId, wallet) {
  var newWallet = null;
  return walletModel.create(wallet)
    .then(function (wallet) {
      newWallet = wallet;
      UserModel.findUserById(userId)
        .then(function (user) {
          user.bitcoinwallets.push(newWallet);
          return user.save();

        });

    });
}


function findAllWalletsForUser(userId) {
  return walletModel.find({userId: userId})
    .populate('userId')
    .exec();
}

function deleteWallet(walletId) {
  return walletModel.deleteOne({_id: walletId});
}
/*
function findUserById(userId) {
  return userModel.findById(userId);
}

function updateUser(userId, user) {
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.deleteOne({_id: userId});
}
function findAllUsers() {
  return userModel.find();
}
function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}
*/
