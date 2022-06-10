/* eslint-disable linebreak-style */
const config = require('./utils/config') // We initalize variable  "config", which require that config library and things inside of "config.js"
const express = require('express') // We initalize variable express, which have to use express library.
const app = express() // We initalize variable app, which purpose is to create express application
const cors = require('cors') // We initalize variable cors,which have to use "cors" libary. We are using cors because it allows us request from all origins.
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware') // We initalize variable middleware, which require that middleware library and things inside of "middlware.js"
const logger = require('./utils/logger') // We initalize variable logger, which require that logger and things inside of that "logge
const mongoose = require('mongoose') // We initalize mongoose, which have to use that mongoose libary

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors()) // We initalize variable middleware cors, which purpose is to allows us to request from all origins
app.use(express.static('build')) // We initialize "middleware express static", which purpose is to create static, which is inside of express. app.use(express.json()) // We are using "app.use(express.json)", that we can get into data, which have been coming from request  if we don't use this, then body value would be undeterminant.
app.use(express.json())
app.use(middleware.requestLogger) // We are taking "requestLogger" into account because request body is empty with "app.use(middleware.requestLogger)" // Note that "requestLogger" middleware should have been taken account after when "app.use(express.json())" have been taken into.
app.use('/api/blogs', blogsRouter) // We are determining and define middleware "personsRouter", which is attached to api path => './api/persons

app.use(middleware.errorHandler) // We initialize "middleware errorhandler" and taking it into account with "app.use(middleware.errorhandler)"


module.exports = app