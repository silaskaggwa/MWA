const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/users', users);

module.exports = app;
