module.exports = function(app) {
  var userModel = require('../model/user/user.model.server');
  var passport= require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  var bcrypt = require("bcrypt-nodejs");

  app.post("/api/user", createUser);
  app.post("/api/user/:userId/admin/newuser", createNewUser);
  app.put("/api/user/:userId", updateUser);
  app.put("/api/user/:userId/admin/updateuser/:exuserId/profile", updateExUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUser);
  app.delete("/api/user/:userId", deleteUser);
  app.delete("/api/user/:userId/admin/updateuser/:exuserId/profile", deleteExUser);
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.get('/api/user/:userId/admin/user',checkIsAdmin, findAllUsers);
  app.get('/api/admin/isAdmin', isAdmin);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);

  function checkIsAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.roles.indexOf('ADMIN') > -1) {
      next();
    } else {
      res.send(401);
    }
  }

  function isAdmin(req, res) {
    if(req.isAuthenticated() && req.user.roles.indexOf('ADMIN') > -1) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    if(user.username === 'admin') {
      user.roles = ['ADMIN'];
    } else {
      user.roles = ['EXCHANGEUSER'];
    }
    userModel
      .createUser(user)
      .then(function(user){
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username, password)
      .then(
        function(user) {
          if(user.username === username
            && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function findAllUsers(req, res) {
    var user = req.body;
    var userId = user._id;
    userModel
      .findAllUsers()
      .then(function (users) {
        res.json(users);
      });
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function createUser(req, res) {
    userModel
      .createUser(req.body)
      .then(function (user){
        res.json(user);
      }, function(err) {
        res.status(400).send(err);
      });
  }

  function createNewUser(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    userModel
      .createUser(req.body)
      .then(function (user){
        res.json(user);
      }, function(err) {
        res.status(400).send(err);
      });
  }

  function updateUser(req, res) {
    var updatedUser = req.body;
    var userId = req.params['userId'];
    userModel
      .updateUser(userId, updatedUser)
      .then(function (updatedUser) {
        res.json(updatedUser);
      });
  }

  function updateExUser(req, res) {
    var updatedUser = req.body;
    var userId = req.params['exuserId'];
    userModel
      .updateUser(userId, updatedUser)
      .then(function (updatedUser) {
        res.json(updatedUser);
      });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel
      .deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function deleteExUser(req, res) {
    var userId = req.params['exuserId'];
    userModel
      .deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserByUsername(username) {
    userModel
      .findUserByUsername(username)
      .then(function (user) {
        res.json(user);
        console.log(user);
      });
  }


  function findUserById(req, res) {

    var userId = req.params['userId'];
    userModel
      .findUserById(userId)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.json({});
        }
      });
  }
  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if((username) && (password)) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
        console.log(user);
      });
      return;

      //res.json(findUserByCredentials(username, password));
    } else if(username) {
      userModel
        .findUserByUsername(username)
        .then(function(user){
          res.json(user);
          console.log(user);
        });
      return;
      // res.json(findUserByUsername(username));
    } else {
      res.status(404).send({error: "Not found"});
    }
  }

};
