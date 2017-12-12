var ticketSchema = require('./ticket.schema.server');
var mongoose = require('mongoose');
var ticketModel = mongoose.model("TicketModel", ticketSchema);

ticketModel.createTicket = createTicket;
ticketModel.findTicketById = findTicketById;
ticketModel.findAllTickets = findAllTickets;
ticketModel.updateTicket = updateTicket;
ticketModel.deleteTicket = deleteTicket;

module.exports = ticketModel;

function createTicket(ticket) {
  return ticketModel.create(ticket);
}
function findTicketById(ticketId) {
  return ticketModel.findById(ticketId);
}

function updateTicket(ticketId, ticket) {
  return ticketModel.update({_id: ticketId}, ticket);
}

function deleteTicket(ticketId) {
  return ticketModel.deleteOne({_id: ticketId});
}
function findAllTickets() {
  return ticketModel.find();
}
