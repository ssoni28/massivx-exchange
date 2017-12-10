module.exports = function (app) {

  var bitcore = require("bitcore-lib");
  app.post("/api/user/:userId/createwallet", createWallet);
  app.get("/api/user/:userId/wallet", findAllWalletsForUser);

  var walletModel = require("../model/wallet/wallet.model.server");

  function createWallet(req, res) {
    var userId = req.params['userId'];
    var brainsrc = req.body.searchText;
    console.log(brainsrc);
    var input = new Buffer(brainsrc);
    var hash = bitcore.crypto.Hash.sha256(input);
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    var pk = new bitcore.PrivateKey(bn).toWIF();

    var address = new bitcore.PrivateKey(bn).toAddress();

    var wallet = {
      userId: '',
      address: address.toString(),
      privateKey: pk
    };

    wallet.userId = userId;

    walletModel
      .createWalletForUser(userId, wallet)
      .then(function (wallet) {
        walletModel
          .findAllWalletsForUser(userId)
          .then(function (wallets) {
            res.json(wallets);
          });
      });
    console.log(address);
    console.log(address.toString());
   /* res.send({
      wallet: address.toString(),
      privatekey: pk
    });*/
   // res.end();
  }

  function findAllWalletsForUser(req,res) {
    var userId = req.params['userId'];
    walletModel
      .findAllWalletsForUser(userId)
      .then(function (wallets) {
        res.json(wallets);
      });
  }
};
