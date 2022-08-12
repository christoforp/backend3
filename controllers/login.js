/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') // We initialize "bcrypt", which require and uses that bcrypt library for generating password hashes
const loginRouter = require('express').Router() // We initalize  Router object with "UserRouter" function and require('express).Router()
const User = require('../models/user') // We initalize  variable of User, which uses thing inside of => user.js file
// We determine "loginRouter" event handler, which purpose is to handle all HTTP Post request and get router to mode => '//
loginRouter.post('/', async(request, response) => {
  const { username, password }= request.body
  const user = await User.findOne({ username }) // We initialize variable user, which get that value and using that function with await syntax method,which purpose is to apply corresponded user of username with request.
  const passwordCorrect = user === null // We initialize passwordCorrect, which purpose is to check if that password of request is correct.
    ? false
    : await bcrypt.compare(password, user.passwordHash) // We are using "bcrypt.compare" method because we do not have been stored password in to database but hashes calculated from the passwords.

  if(!(user && passwordCorrect)){  // We are using that if condition to figure out if that "user or password" is found, whereas we don't find any corresbondet username or password, then we answer request with statuscode(401) "unauthorized"
    return response.status(401).json({
      error: 'invalid username or password'  // If that if condition is true, then it print that error in terminal and console.
    })
  }  // We initialize userForToken,  get table of its value
  const userForToken = {
    username: user.username, // We are define username, which get its value => User.username
    id: user._id, // We are defining id, which get user._id its value
  }
  // We initalize "token", which is equal as that function method of "jwt.sing", what we are using if password is correct.
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn:  60*60 })



  // We are also limiting validity period of a token with "expiresIn" method => 60*60, which means that token will expires  in 60*60 seconds, which is in one hour.
  // When token expired time will end, then client have to create a new token.
  // What shorter we set that expired time of token the more safer solution is. // We have been signed token digitally for using String format from environment variable SECRET as the secret
  // The digital significant ensures that only those parties who knows password can have opportunity to generate valid token id.
  // We are also limiting validity period of a token with "expiresIn" method => 60*60, which means that token will expires  in 60*60 seconds, which is in one hour.
  // When token expired time will end, then client have to create a new token.
  // What shorter we set that expired time of token the more safer solution is.
  response.status(200).send({ token, username: user.username, name: user.name })  // We are answering succesfull request with statuscode(200),
  // We are sending generated token, username of user and name of user with body of answer to request maker.
})
// We determining and creating that loginRouter  and all routes to own route object as same as in previous section where all routes have been separated to application.
// We are using module.exports that it export that determining route for module user.
// We exporting only one things, So There is only one possible using way that we can use.
module.exports = loginRouter