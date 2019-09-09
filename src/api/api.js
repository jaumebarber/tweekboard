const express = require('express')
var createError = require('http-errors');
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const api = express()

const Translations = require('./routes/Translations')
const Data = require('./routes/Data')

api.use(cors())
api.options('*', cors())
api.use(logger('dev'))
api.use(express.json())
api.use(express.urlencoded({ extended: false }))
api.use(cookieParser())

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.use(function(req, res, next) {
  next(createError(404));
});

api.use(Translations)
api.use(Data)

module.exports = api

