/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

const blogsRouter = require('express').Router() // We are creating  router object with "blogsRouter" function and require('express').Router()
const Blog =  require('../models/blog') // We initalize  variable  "Blog" and taking its models into account.
// We are calling routes eventhandler to controllers So therefore we are using blogsRouter and determining routes. 
// We have been moved all defined routes, which are related to blogs in here. 

// We determine blogsRouter eventhandler, which purpose is to get  Router => '/
blogsRouter.get('/', (request,response ) => {
  Blog.find({}).then(showresult  => { // it aplly all values from database and return it back to user. 
    response.json(showresult) // We answering request and express moves it automatically to json mode. 

  })
})

//  We determine blogsRouter eventhandler, which purpose is to handle all request and get Router to '/:id', So it handle all request, which are in '/:id' mode for example [1,2,3,4]
blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id).then(blog => {// We changes independent blogs review  to mode => "Blog.findById().then({})"
    if(blog) {
      response.json(blog)
    } else {
      response.status(404).end() // Whereas "findById" get wrond id value, then it goes rejected mode. We answering request with response.status(404).end()
    }    // When "findById" get wrong id value of argument it throws error as result it goes rejected mode  then we using callbackfunction of catch block  => ".catch(error => {next(error))"
        // We creating event handler ".catch(error => next(error))", which purpose is to move "errorhandler" to  forward with "next"() function 

  }).catch(error => next(error))
})


// We determine blogsRouter eventhandler, which purpose is to handle all http POST request and get that Router mode '/'
blogsRouter.post('/', (request,response, next) => { 
  const getValue= request.body // We initalize variable getValue, which is equal as request.body
  // We initalize variable "blog ", which have 4 object  and field   => [ "title", "author", "url", "likes"]
  const blog = new Blog({
    title: getValue.title, // So title is  String => getValue.title goes under blogscollection in mongoDB => blogs.title
     author: getValue.author, // So author is String => getValue.author  goes under blogscollection in MongoDB => blogs.author
     url:  getValue.url,    // So url is String => getValue.url goes under blogscollection in MongoDB => blogs.url 
    likes: getValue.likes   // So likes in Number => getValue.likes goes under blogscollection in MongoDB => blogs.likes
    })
  // We creating blogs  object with  "Blog" construction function they are like as Javascript object, So they have combination of method that they can save object into database.
  // We answering  request  with save operation  inside  of callback function, For this we make sure that only if operation will success.
  blog.save().then(savedBlog => {
    response.json(savedBlog) // "response.json()" purpose is to answer and return that in json.mode
    // If we trying to add a new Blog, which breaks validation rule, then it throws error. Therefore 
    // We are creating similar handler of creating a new blogs, that it can passes any potential exeption to the   "error handler middleware" 

  }) .catch(error => // We are creating errorhandler with callbackfunction error, which purpose is to move that errorhandler to forward  to the next() function  
    next(error)) // "next())"  middleware function purpose is to move that to "errorhandlermiddleware"  
})



// We determining and creating that blogsRouter and all routes to own route object as same as in previous section where all routes have been separated to application.
// We are using module.exports that it export that determining route for module user.
// We exporting only one things, So There is only one possible using way that we can use. 
module.exports = blogsRouter

