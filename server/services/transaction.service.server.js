module.exports = function(app) {
  var transactionModel = require('../model/transaction/transaction.model.server');

  app.post('/api/user/:userId/transaction', createTransaction);
  app.put("/api/user/:userId/transaction/:transactionId", updateTransaction);
  app.delete("/api/user/:userId/transaction/:transactionId", deleteTransaction);
  app.get('/api/user/:userId/transactions', findAllTransactionsForUser);


  function findAllTransactions(req, res) {
    var transaction = req.body;
    var transactionId = transaction._id;
    transactionModel
      .findAllTransaction()
      .then(function (transactions) {
        res.json(transactions);
      });
  }

  function findAllTransactionsForUser(req, res) {
    var userId = req.params['userId'];
    transactionModel
      .findAllTransactionsForUser(userId)
      .then(function (requiredTransactions) {
        res.json(requiredTransactions);
      }, function(err) {
        res.status(400).send(err);
      });
  }

  function createTransaction(req, res) {
    var userId = req.params['userId'];
    var transaction = req.body;
    transactionModel
      .createTransaction(userId, transaction)
      .then(function (transaction) {
        transactionModel
          .findAllTransactionsForUser(userId)
          .then(function (transactions) {
            res.json(transactions);
          });
      });
  }

  function updateTransaction(req, res) {
    var updatedtransaction = req.body;
    var transactionId = req.params['transactionId'];
    transactionModel
      .updateTransaction(userId, updatedtransaction)
      .then(function (updatedtransaction) {
        res.json(updatedtransaction);
      });
  }

  function deleteTransaction(req, res) {
    var transactionId = req.params['userId'];
    transactionModel
      .deleteTransaction(transactionId)
      .then(function (transaction) {
        res.json(transaction);
      });
  }

};
