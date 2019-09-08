const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const api = express()

const Translations = require('./routes/Translations')

api.use(cors())
api.options('*', cors())
api.use(logger('dev'))
api.use(express.json())
api.use(express.urlencoded({ extended: false }))
api.use(cookieParser())

api.use(Translations)


module.exports = api