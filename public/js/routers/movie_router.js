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
// app.use( express.static( path.join( application_root, 'public' )));
// app.use( express.static( path.join( application_root, 'browser' )));

var baseUrl = 'http://www.omdbapi.com/?t=';

//Search OMDB API
// module.exports = {
//   getMovies: function(movieSearch){
//     request({uri: baseUrl + movieSearch, json:true}, function (error, response, body) {
//       if(error){
//         console.log("error: ", error)
//       } else {
//         body.results.forEach(function (movie){
//         //
//         var title      = movie.Title;
//         var poster     = movie.Poster;
//         var rated      = movie.Rated;
//         var genre      = movie.Genre;
//         var plot       = movie.Plot;
//         var imdbRating = movie.imdbRating;
//         var type       = movie.Type;

//         var data = {
//           title: movie.Title,
//           poster: movie.Poster,
//           rated: movie.Rated,
//           genre: movie.Genre,
//           plot: movie.Plot,
//           imdbRating: movie.imdbRating,
//           type: movie.Type;
//         }
//         //I might need to fix this




//         })
//       }
//     })
//   }
// };

// //Query Route  -- Used for specific scoped queries 
// app.get('/movies/query', function (req,res) {
//   var queryParams = '%' + req.query.q + '%';
//   console.log(queryParams);
//     JobPost
//     .findAll({
//       limit: 500,
//       order: [['id', 'DESC']],
//       where: {
//         post_content: {
//           $or: [
//           {$like: queryParams}
//         ]}
//       }
//     }).then(function(jobposts) {
//       res.send(jobposts);
//     });
// });

//Get all the Movies ...help 
app.get('/movies', function(req, res) {
  var queryParams = req.query;

  request({
    uri: baseUrl,
    method: 'GET',
    json: true,
    qs: queryParams
  },
  function(error, response, body) {
    var results = body.data;
    res.send(results);
  });
});

//Read the Movies
app.get('/movies/:id', function(req, res) {
  Movie
    .findOne({
      where: { id: req.params.id }, 
    })
     .then(function(movies) {
      res.send(movies);
     });
});

//Create the Movies
app.post('/movies', function(req, res) {
  Movie
    .create(req.body)
    .then(function(newMovie) {
      res.send(newMovie);
    });
});

//Update the Movies
app.put('/movies/:id', function(req, res) {
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
app.delete('/movies/:id', function(req, res) {
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