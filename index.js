/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable linebreak-style */

/* eslint-disable quotes */
/* eslint-disable linebreak-style */

/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
// index.js file import only actual "app.js" file and run application. 
const app  = require('./app') // We initalize  "app" function, which have to use that app libary and actual "app.js" file
const http = require('http')  
const config = require('./utils/config') // We initalize function "config", which require that config library and things inside of "config.js" 
// We also get into other environment variables with import config to module => "('./utils/config')"
const logger = require('./utils/logger') // We initalize function logger, which require that logger library and things inside of "logger.js"
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')

const blogSchema = new mongoose.Schema({
  title:String,
  author: String,
  url: String,
  likes: Number
  
})

const  Blog = mongoose.model('Blog', blogSchema)

const mongoUrl= `mongodb+srv://christoforp:christoforp@cluster0.osmk6.mongodb.net/myPhonebook?retryWrites=true&w=majority`
mongoose.connect(mongoUrl)

app.use(cors())

app.use(express.json())

app.get('/api/blogs', (request,response) => {
  Blog
  .find({})
  .then(blogs => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request,response) => {
  const blog = new Blog(request.body)

  blog
  .save()
  .then(savedBlog => {
    response.status(201).json(savedBlog)
  })

  })


// We initalize function variable server, which is equal and use that to run application. 
// Running of application happens with "server" variables object "http.createServer(app)"


const PORT = 3002


app.listen(PORT, () => {
  logger.info(`server running on port ${PORT}`) // "console.info" purpose is to print that normal loggermessage to console & terminal  and that text => "server running on port"
})  // We are making printing of running with function "info" of logger module, Which is located in => './utils/logger' 
    // We also get into to other environment variables for import "configmodule" => ${config.PORT}

