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

// We determining simple variable "totallikes", what we are using for test. That function get also value  table of blogs.
const totalLikes = (blogs) => {
// in practically that function works with "listhelper.test.js" file where we  have been initialized variable => "const blogs[]"
// Test implent that belov function, So it apply all "likes" object values from blogs table, then it conduct that "reduce" method  function
  return blogs.map(total => total.likes).reduce((previousValue, currentValue) => previousValue + currentValue)
}

// We determining simple variable "favoriteBlog", which get its value table of blogs. This variable and function using purpose is mean to for test. Therefore we can call it to  as"testfunction"


const favoriteBlog = (blogs) => {
  // in practically that function works with "listhelper.test.js" file where have been initialized "const listWithOneFavoriteBlogs"
  // Test implement that belov function, So it apply all "likes object values from blogs table"
  const blogslikes = blogs.map(total => total.likes) // We initalize variable blogslikes, which use that "blogs.map" method, which means that it apply all "likes object values " from blogs table and creating a new table to under "get likes" variable
  const findIndex = blogslikes.indexOf(Math.max(...blogslikes)) // We initialize variable "findIndex", which apply highest value of  blogslikes and return that current index
  return blogs [findIndex] // We are returning  value of that variable blogs when we running test


}







// We are using module exports that it move that determinided "dummy" and "totallikesfor module user
// We are also separating that "dummy"  of test function  to own module what module user can use.
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog



}

