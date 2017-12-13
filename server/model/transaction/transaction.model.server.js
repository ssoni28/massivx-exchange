var transactionSchema = require('./transaction.schema.server');
var userModel = require('../user/user.model.server');
var mongoose = require('mongoose');
var transactionModel = mongoose.model("TransactionModel", transactionSchema);

transactionModel.createTransaction = createTransaction;
transactionModel.findTransactionById = findTransactionById;
transactionModel.findAllTransaction = findAllTransaction;
transactionModel.updateTransaction = updateTransaction;
transactionModel.deleteTransaction = deleteTransaction;
transactionModel.findAllTransactionsForUser = findAllTransactionsForUser;

module.exports = transactionModel;

function createTransaction(userId,transaction) {
  var newTransaction = null;
  return transactionModel.create(transaction)
    .then(function (transaction) {
      newTransaction = transaction;
      userModel.findUserById(userId)
        .then(function (user) {
          user.transactions.push(newTransaction);
          return user.save();
        });
    });
}
function findTransactionById(transactionId) {
  return transactionModel.findById(transactionId);
}

function updateTransaction(transactionId, transaction) {
  return transactionModel.update({_id: transactionId}, transaction);
}

function deleteTransaction(transactionId) {
  return transactionModel.deleteOne({_id: transactionId});
}
function findAllTransaction() {
  return transactionModel.find();
}
function findAllTransactionsForUser(userId) {
  return transactionModel.find({userId: userId})
    .populate('userId')
    .exec();
}
