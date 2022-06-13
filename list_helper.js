/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

// We are determining simple variable  "dummy" , that function get value => blog
const dummy = (blogs) => {
// in practically that function works with "listhelper.test.js" file where we  have been initialized variable => "const blogs[]"
// This means that reducer variable will changes to blogs variables values
// We are determining reduce of average method, which purpose is to calculate average of lenght if lenght is not zero
  const reducer  = (sum, item) => {
    return sum + item
  }    // if the lenght of blogs is true  then it return that 1 . in all other cases it return that variables reducer value
  return blogs.length  === 0
    ? 1  // if that condition in above will happens then we return that value
    : blogs.reduce(reducer, 0)/blogs.length  // If that if condition will not happen, then we return that reducer variable va
}



// We are using module exports that it move that determinided "dummy" and "totallikesfor module user
// We are also separating that "dummy"  of test function  to own module what module user can use.
module.exports = {
  dummy,



}