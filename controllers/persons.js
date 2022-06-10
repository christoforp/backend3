/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

const personsRouter = require('express').Router() // We are creating  router object with "personrouter" function and require('express').Router()
const Person =  require('../models/person') // We initalize  variable  "Person" and taking its models into account.
// We are calling routes eventhandler to controllers So therefore we are using personRouter and determining routes. 
// We have been moved all defined routes, which are related to persons in here. 

// We determine personRouter eventhandler, which purpose is to get  Router => '/
personsRouter.get('/', (request,response ) => {
  Person.find({}).then(showresult  => { // it aplly all values from database and return it back to user. 
    response.json(showresult) // We answering request and express moves it automatically to json mode. 

  })
})

//  We determine personRouter eventhandler, which purpose is to handle all request and get Router to '/:id', So it handle all request, which are in '/:id' mode for example [1,2,3,4]
personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {// We changes independent persons review  to mode => "Person.findById().then({})"
    if(person) {
      response.json(person)
    } else {
      response.status(404).end() // Whereas "findById" get wrond id value, then it goes rejected mode. We answering request with response.status(404).end()
    }    // When "findById" get wrong id value of argument it throws error as result it goes rejected mode  then we using callbackfunction of catch block  => ".catch(error => {next(error))"
        // We creating event handler ".catch(error => next(error))", which purpose is to move "errorhandler" to  forward with "next"() function 

  }).catch(error => next(error))
})


// We determine personRouter eventhandler, which purpose is to handle all http POST request and get that Router mode '/'
personsRouter.post('/', (request,response, next) => { 
  const getValue= request.body // We initalize variable getValue, which is equal as request.body
  // We initalize variable "person ", which have two object and field   => [,"name","number"]
  const person = new Person({
    name: getValue.name, // So name is  String => getValue.name goes under personscollection in mongoDB => persons.name  
    number: getValue.number // So name is String => getValue.number goes under personscollection in MongoDB => persons.number
  })
  // We creating persons object with  "Person" construction function they are like as Javascript object, So they have combination of method that they can save object into database.
    // We answering  request  with save operation  inside  of callback function, For this we make sure that only if operation will success.
  person.save().then(savedPerson => {
    response.json(savedPerson) // "response.json()" purpose is to answer and return that in json.mode
    // If we trying to add a new person, which breaks validation rule, then it throws error. Therefore 
    // We are creating similar handler of creating a new persons, that it can passes any potential exeption to the   "error handler middleware" 

  }) .catch(error => // We are creating errorhandler with callbackfunction error, which purpose is to move that errorhandler to forward  to the next() function  
    next(error)) // "next())"  middleware function purpose is to move that to "errorhandlermiddleware"  
})


// We determine personRouter eventhandler, which purpose is get Router => '/:id' mode and becoming http request. 
personsRouter.delete('/:id', (request, response, next) => {
       // If user want to delete person, which "id"  (2), then "request.params.id" get value 2 
       Person.findByIdAndRemove(request.params.id).then(() => {
        // Answer of both cases is No content, So if persons removing happens or It Does not found that. 
        response.status(204).end() // We can check if that resource was actually deleted in base with  "callback" function .then(result) and we can also return response with other statuscode if that it is necessary. 
      })  // We answering http request with statuscode(204). No content 
          // We are creating errorhandler with callbackfunction error, which purpose is to move that errorhandler to forward  to the next() function 
    .catch(error  =>          // if " next()  function is called by parameters, then it continue its execution or conduction in express errorhandler middleware
      next(error)) 

    })


  

  
personsRouter.put('/:id', (request, response,next) => { // We determine eventhandler, which purpose is to get Router mode => '/:id' and becoming http request 
  const { name,number } = request.body
  const getValue = request.body // We determine variable getValue, which is equal as request.body 
  const  person = { // We initalize variable "person ", where we adding two different object  => ["name, "number"], which is seen "let persons"
    name: getValue.name, // So name is String => getValue.name goes to persons collection in MongoDB => persons.name
    number: getValue.number // So name is String => getValue.number goes to persons collection in MongoDB => persons.number 
  }
  Person.findByIdAndUpdate(request.params.id,  person ,  { name, number },  { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson) // We answering and return that request with json.mode 
     
    }) // We are creating errorhandler with callbackfunction error, which purpose is to move that errorhandler forward to the next() function 
    .catch(error => next(error))
})


// We determining and creating that personrouter and all routes to own route object as sime as in previous section where all routes have been separated to application.

// We are using module.exports that it export that determining route for module user.
// We exporting only one things, So There is only one possible using way that we can use. 
module.exports = personsRouter

