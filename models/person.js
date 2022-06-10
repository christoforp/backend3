/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const mongoose = require("mongoose")   // We initalize function "mongoose", which use "mongoose" library.
const uniqueValidator = require('mongoose-unique-validator') // We  determine "uniqueValidator", which use "mongoose-unique-validator"

// "Mongoose-unique-validator" is plugin, which add pre-validation to for uniquefield with "mongooseSchema".
// This help to use make "errorhandler" easier and we get mongoose validation erro, when we  attempt to violate unique constraint.



// We initalize variable "personSchema", which purpose is to determine, which mode we save those object into database.
// So practically this means that, which mode they will be saved on the database.
const  personSchema = new mongoose.Schema({
  // We utilize "Routes eventhandler" and handler defining data what have been saved into database.
  // We are using "Mongoose" "validation functionality"
  // We define validation rules for both datafield with  in Schema.

  name: { // We define variable field name, which get its type name => String => it is found in database => persons.name
    type: String,
    minlength: 5,           // variables "name" content type should now be at least 5 String.
    required: true          // "minlenght" is an example validator, which  is build and provided by Mongoose
    // required is an example validator, which is also build and provided by Mongoose.
  },
  // There is good notice that "name" field must have some value because since its minlenght check condition do not mention situation, where field does not have any value.

  number: {              // We define variable field "number", which get its type number => String
    type: String,         // We also define values for number field and  it must have some value of condition because field value can not be empty.
    minlength: 8,           // "minglength" is an example validator, which  is in build-validator and provided by mongoose.
    // We determine and set "minlenght" for type field "number". It get  its minimalenght value 8, which means that "number" lenght should be at least 8.
    // required is an example validator, which is also build and provided by Mongoose
    required: true   // Mongooses custom validator functionality allows us to create a new validators if non of build in ones cover our need.


  }

})
// Adding uniqueValidator plugin. So we can easily add Validatio unique constraint.
personSchema.plugin(uniqueValidator) // This purpose is to apply uniqueValidator plugin to Schema.




// We de can determine with this that which mode it show Json data
personSchema.set('toJSON', {
  transform: (document, returnedObject) => { // We can make changes to data with "transoform" function before we return it to user
    returnedObject.id = returnedObject._id.toString() // We initalize variable "returnedObject.id", which is equals as "returnedObject._id.toString()"
    delete returnedObject._id  // We are using "delete returnedObject._id" because we wanto get rid of object indpendent identifier
    delete returnedObject.__v // We don't also want to show and return that idenfier "__v" of Mongo DB, So we are using "delete" to get rid of that.

  }
})







module.exports = mongoose.model('Person ', personSchema) // We are using determining "mongoose" own module with "moduule.exports", So Its external section are seen when determine value for that "moduule.exports" it get value => "Person"
// There is no seen another things inside of that "module" like as Url or mongoose.
// "mongoose.model"  will automatically move that model in MongoDB for example "Person" will move automatically into "persons" collection.
// We take that export (function) to  use in application index.js file.
// mongoose  convention  is to determine automatically that collension as the plural and changes big letter into small.


