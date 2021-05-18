const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/usersRouter');
const commentRouter = require('./routes/commentsRoute');

const app = express();

require('dotenv').config({path: './config/.env'});
require('./database/connection');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(usersRouter);
app.use(commentRouter);


app.get('/moviedb/key', (req, res) => {
  try {
    return res.status(200).json({ key: process.env.VIDEO_API_KEY });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });

  app.get('/*', (req, res) => {

    return res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(`${PORT}`, () => {
  console.log(`App is up and running on port ${PORT} on ${process.env.NODE_ENV} mode.`);
});


module.exports = app;
