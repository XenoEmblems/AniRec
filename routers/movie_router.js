var express          = require('express'),
    request          = require('request'),
    bodyParser       = require('body-parser'),
    logger           = require('morgan'),
    session          = require('express-session'),
    models           = require('../models'),
    Movie            = models.movies,
    User             = models.users;

    
var movieRouter = express.Router();
// var app = express();

// app.use(logger('dev'));
// app.use( bodyParser() );
// app.use( express.static( path.join( application_root, 'public' )));
// app.use( express.static( path.join( application_root, 'browser' )));

var baseUrl = 'http://www.omdbapi.com/?t=';

// // Search OMDB API
// // var getMovies = function(movieSearch){
// //     request({uri: baseUrl, json:true}, function (error, response, body) {
// //       if(error){
// //         console.log("error: ", error)
// //       } else {
// //         body.results(function (movie){
// //         //
// //         var title      = movie.Title;
// //         var poster     = movie.Poster;
// //         var rated      = movie.Rated;
// //         var genre      = movie.Genre;
// //         var plot       = movie.Plot;
// //         var imdbRating = movie.imdbRating;
// //         var type       = movie.Type;

// //         var data = {
// //           title: movie.Title,
// //           poster: movie.Poster,
// //           rated: movie.Rated,
// //           genre: movie.Genre,
// //           plot: movie.Plot,
// //           imdbRating: movie.imdbRating,
// //           type: movie.Type
// //         }
// //         console.log(data);
// //         //I might need to fix this




// //         })
// //       }
// //     })
// //   };

// // getMovies("Archer");

// // //Query Route  -- Used for specific scoped queries 
// // movieRouter.get('/movies/query', function (req,res) {
// //   var queryParams = '%' + req.query.q + '%';
// //   console.log(queryParams);
// //     JobPost
// //     .findAll({
// //       limit: 500,
// //       order: [['id', 'DESC']],
// //       where: {
// //         post_content: {
// //           $or: [
// //           {$like: queryParams}
// //         ]}
// //       }
// //     }).then(function(jobposts) {
// //       res.send(jobposts);
// //     });
// // });

// Get all the Movies ...help 
movieRouter.get('/', function(req, res) {
  var queryParams = req.query;
  request({
    uri: 'http://www.omdbapi.com/?t=Archer',
    method: 'GET',
    json: true,
    // qs: queryParams
  },
  function(error, response, body) {
    console.log(body);
    var data = {
          title: body.Title,
          poster: body.Poster,
          rated: body.Rated,
          genre: body.Genre,
          plot: body.Plot,
          imdbRating: body.imdbRating,
          type: body.Type
        }
    console.log(data);
    var results = body.data;
    res.send(results);
  });
});

//Read the Movies
movieRouter.get('/:id', function(req, res) {
  Movie
    .findOne({
      where: { id: req.params.id }, 
    })
     .then(function(movies) {
      res.send(movies);
     });
});

//Create the Movies
movieRouter.post('/', function(req, res) {
  Movie
    .create(req.body)
    .then(function(newMovie) {
      res.send(newMovie);
    });
});

//Update the Movies
movieRouter.put('/:id', function(req, res) {
  Movie
    .findOne({
      where: { id: req.params.id },
    })
     .then(function(movie) {
      movie
        .update(req.body)
        .then(function(updatedMovie){
        res.send(updatedMovie);
        });
     });
});

//Delete the Movies
movieRouter.delete('/:id', function(req, res) {
  Movie
    .findOne(req.params.id)
    .then(function(movie) {
      movie
        .destroy()
        .then(function() {
          res.send(movie);
        });
    });
});

module.exports = movieRouter;