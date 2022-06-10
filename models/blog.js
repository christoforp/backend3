/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const mongoose = require("mongoose")   // We initalize function "mongoose", which use "mongoose" library.


// We initalize variable "blogSchema", which purpose is to determine, which mode we save those object into database.
// So practically this means that, which mode they will be saved on the database.
const  blogSchema = new mongoose.Schema({
  // We utilize "Routes eventhandler" and handler defining data what have been saved into database.
  // We are using "Mongoose" "validation functionality"
  // We define validation rules for both datafield with  in Schema.
  // We define variable field name, which get its type name => String => it is found in database => persons.name
title: String,
author: String,           // variables "name" content type should now be at least 5 String.
url: String,
 likes: Number          // "minlenght" is an example validator, which  is build and provided by Mongoose
  // required is an example validator, which is also build and provided by Mongoose. }) // There is good notice that "name" field must have some value because since its minlenght check condition do not mention situation, where field does not have any value.

})




// We de can determine with this that which mode it show Json data
blogSchema.set('toJSON', {
  transform: (document, returnedObject) => { // We can make changes to data with "transoform" function before we return it to user
    returnedObject.id = returnedObject._id.toString() // We initalize variable "returnedObject.id", which is equals as "returnedObject._id.toString()"
    delete returnedObject._id  // We are using "delete returnedObject._id" because we wanto get rid of object indpendent identifier
    delete returnedObject.__v // We don't also want to show and return that idenfier "__v" of Mongo DB, So we are using "delete" to get rid of that.

  }
})







module.exports = mongoose.model('Blog', blogSchema) // We are using determining "mongoose" own module with "moduule.exports", So Its external section are seen when determine value for that "moduule.exports" it get value => "Blog"
// There is no seen another things inside of that "module" like as Url or mongoose.
// "mongoose.model"  will automatically move that model in MongoDB for example "Programmer" will move automatically into "programmers" collection.
// We take that export (function) to  use in application index.js file.
// mongoose  convention  is to determine automatically that collension as the plural and changes big letter into small.


