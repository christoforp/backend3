/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require('dotenv').config()


const PORT = process.env.PORT // We initalize  variable PORT, Which get environment variable of its value
                                         // "process.env.PORT" now we have been determinant PORT OF inside environment variable, whereas environment variable PORT Is not defined.
const MONGODB_URI = process.env.NODE_ENV ==='test'
? process.env.TEST_MONGODB_URI
: process.env.MONGODB_URI

// We initalize variable "MONGODB_URI", which get envinronment variables value => "process.env.MONDODB_URI"

// We separate  handling of environment  variables to own module.
// We get also in to enviroment variables because we have been separated those with module
module.exports = {
    MONGODB_URI,
    PORT
}
