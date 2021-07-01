var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var cors = require('cors');
const fileUpload = require('express-fileupload');



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nepal_networks', {useNewUrlParser: true, useUnifiedTopology: true});



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are Connection with DB Nepal networks");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var radioindexRouter = require('./routes/radioindex');
// var radioapiRouter = require('./routes/radioapi');

hbs.registerPartials(__dirname + '/views/partials');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/radio', radioindexRouter);
//app.use('/api/radioapi', radioapiRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
