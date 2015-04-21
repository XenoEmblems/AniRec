var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    session          = require('express-session');
    models           = require('./models'),
    movieRouter      = require('./public/js/routers/movie_router.js'),
    userRouter       = require('./public/js/routers/user_router.js');
    

var app   = express();

var User  = models.users;
var Movie = models.movies;

app.use(logger('dev'));
app.use( bodyParser() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));
app.use('/movies', movieRouter);
app.use('/users', userRouter);

app.get('/', function(req, res) {
  res.send('Good Job Eric');
});

app.listen(9001, function() {
  console.log('Server listening on 9001...');
});






