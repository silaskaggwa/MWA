const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const grades = require('./routes/grades');

const app = express();
require('dotenv').config();

app.use(logger('dev'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.set('x-powered-by', false);

app.use('/grades', grades);

module.exports = app;
