
/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {
  require("./model/model.server.js");
  require("./services/wallet.service.server.js") (app);
  require("./services/user.service.server.js") (app);
  require("./services/ticket.service.server.js") (app);
  require("./services/transaction.service.server.js") (app);
};

