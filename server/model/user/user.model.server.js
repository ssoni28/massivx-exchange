var userSchema = require('./user.schema.server');
var mongoose = require('mongoose');
var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findAllUsers = findAllUsers;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

function createUser(user) {
  return userModel.create(user);
}
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
