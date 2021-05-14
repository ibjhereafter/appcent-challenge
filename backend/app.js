const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

require('dotenv').config({path: './config/.env'});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 3001;

app.listen(`${PORT}`, () => {
  console.log(`App is up and running on port ${PORT} on ${process.env.NODE_ENV} mode.`);
});


module.exports = app;
