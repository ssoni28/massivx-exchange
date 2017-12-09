module.exports = function (app) {

  var bitcore = require("bitcore-lib");
  app.post("/createwallet", createWallet);

  function createWallet(req, res) {
    var brainsrc = req.body.searchText;
    console.log(brainsrc);
    var input = new Buffer(brainsrc);
    var hash = bitcore.crypto.Hash.sha256(input);
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    var pk = new bitcore.PrivateKey(bn).toWIF();

    var address = new bitcore.PrivateKey(bn).toAddress();
    console.log(address);
    console.log(address.toString());
    res.send({
      wallet: address.toString(),
      privatekey: pk
    });
    res.end();
  }
};
