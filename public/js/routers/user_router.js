var express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    bcrypt           = require('bcrypt'),
    session          = require('express-session'),
    models           = require('../../../models'),
    Movie            = models.movies,
    User             = models.users;

var app = express();

app.use(logger('dev'));
app.use( bodyParser() );

//Login and Signin shit

app.use(session({
  secret: 'donttellemdonttellem',
  saveUnitiialized: false,
  resave: false
}));

//Callback
var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);
  var reqID     = parseInt(req.params.id);
  sessionID === reqID ? next() : res.status(401).send({ err: 401, msg: 'YOU SHALL NOT PASS!'});
};

//LOGIN AND LOG OUT

app.post('/sessions', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User
    .findOne({
      where: { username: username }
    })
    .then(function(user) {
      if (user) {
        bcrypt.compate(password, user.password_digest, function(err, result) {
        if (result) {
          req.session.currentUser = user.id;
          res.send(user);
        } else {
          res.status(400);
          res.send({ err: 400, msg: 'Incorrect Password' });
        }
      });
    } else {
      res.status(400);
      res.send({ err: 400, message: ''});
    }
  });
});

app.delete('/sessions', function(req, res) {
  delete req.session.currentUser;
  res.send({ msg: 'Successfully logged out' });
});

app.get('/current_user', function(req, res) {
  if (req.session.currentUser) res.send(req.session.currentUer)
});

//GET THE USERS
app.get('/users/:id', function(req, res) {
  User
    .findOne({
      where: { id: req.params.id },
      include: [Movie]
    })
    .then(function(user) {
      res.send(user);
    });
});
//UPDATE THE USERS

app.put('/users', restrictAccess, function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User
      .findOne({
        where: { id: req.params.id },
        include: [Account]
      })
      .then(function(user) {
        user
          .update({
            username: req.body.username,
            password_digest: hash
          })
          .then(function(updatedUser) {
            res.send(updatedUser);
          });
      })
  });
});

//DELETE THE USERS
app.delete('/users/:id', restrictAccess, function(req, res) {
  User
    .findOne(req.params.id)
    .then(function(user) {
      user
        .destroy()
        .then(function() {
          delete req.session.currentUser;
          res.send(user);
        });
    });
});

//UPDATE THE MOVIES IN THE USER ACCOUNT
//UPDATE THE PITCH IN THE USER ACCOUNT

app.put('/users/:id/movies/:movie_id', restrictAccess, function(req, res) {
  Movie
    .findOne(req.params.movie_id)
    .then(function(movie) {
      movie
        .update({ pitch: req.body.pitch })
        .then(function() {
          res.send(movie);
        });
    });
});

app.delete('/users/:id/movies/:movie_id', restrictAccess, function(req, res) {
  Movie
    .findOne(req.params.movie_id)
    .then(function(account) {
      account
        .destroy()
        .then(function() {
          res.send(account);
        });
    });
});



