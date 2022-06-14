/* eslint-disable linebreak-style */
// Our application is simply,So it does not have to make any unit testing
// We determine function
const reverse = (string) => {

  return string
    .split('')
    .reverse('')
    .join('')

}


// We determining simple average function, which get array of its value
// function "average" uses reduce of map method
// We are also using "reduce method to calculate average"
const average = (array) => {
  const reducer = (sum, item) =>  {
    return   sum + item 
  } // If length of array is zero then it return that lenght in all other cases it calculate  average  with reduce method 
  return array.length === 0 
    ?  0
    :array.reduce(reducer, 0) / array.length
}






// We are using module exports that it exports that determining route for module user
// We are separating those functions to own module that user can uset it.
module.exports = {
  reverse,
  average
}


