module.exports = function(app) {
  var ticketModel = require('../model/ticket/ticket.model.server');

  app.post('/api/user/:userId/createticket', createTicket);
  app.put('/api/user/:userId/createticket/:ticketId', updateTicket);
  app.get('/api/user/:userId/createticket/:ticketId', findTicketById);
  app.delete('/api/user/:userId/createticket/:ticketId', deleteTicket);
  app.get('/api/user/:userId/tickets', findAllTickets);

  function findAllTickets(req, res) {
    var ticket = req.body;
    var ticketId = ticket._id;
    ticketModel
      .findAllTickets()
      .then(function (tickets) {
        res.json(tickets);
      });
  }

  function createTicket(req, res) {
    ticketModel
      .createTicket(req.body)
      .then(function (ticket) {
        res.json(ticket);
      }, function (err) {
        res.status(400).send(err);
      });
  }

  function updateTicket(req, res) {
    var updatedTicket = req.body;
    var ticketId = req.params['ticketId'];
    ticketModel
      .updateTicket(ticketId, updatedTicket)
      .then(function (updatedTicket) {
        res.json(updatedTicket);
      });
  }

  function deleteTicket(req, res) {
    var ticketId = req.params['ticketId'];
    ticketModel
      .deleteTicket(ticketId)
      .then(function (ticket) {
        res.json(ticket);
      });
  }

  function findTicketById(req, res) {
    var ticketId = req.params['ticketId'];
    ticketModel
      .findTicketById(ticketId)
      .then(function (ticket) {
        if (ticket) {
          res.json(ticket);
        } else {
          res.json({});
        }
      });
  }
};
