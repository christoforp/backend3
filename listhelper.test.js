/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */


//* eslint-disable linebreak-style */
// We are taking test function "listhelper" to account, which require test functions in => "utils/list_helper.js"


const listHelper = require('../utils/list_helper.js')
// We are determining independent test cases with function of test. So First paramater shows test description => ('dummy returns one', () =>, so it meant that function return one.
// Secondparameter is  that function,  which purpose is to show  that  functionality. In this case it is blogs



// We are determining independent test cases with function of test. So First paramater shows test description => ('dummy returns one', () =>, so it meant that function return one.
// Secondparameter is  that function,  which purpose is to show  that  functionality. In this case it is blogs



// We are using "describe" block, that we can divide those in logical collections. Printing of that test Shows also that "describe" block in terminal, which in this case is going to be "total likes"
const listWithOneBlog = [ // We initalize variable listWithOneBlog, Which is equal as that table []
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  } ,
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
    
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }  
]


const listWithOneFavoriteBlog=  { // We initalize variable "listWithOneFavoriteBlog", which is equal as that table
  _id: '5a422b3a1b54a676234d17f9',
  title: 'Canonical string reduction',
  author: 'Edsger W. Dijkstra',
  url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
  likes: 12,
  __v: 0
}
  
  
  


test('dummy returns one', () => { // We determine code of test, So we generate dummy of string
// It print that text visible in console&terminal 
  const blogs = []  // We initalize variable "blogs", which is equal as that table []
  //
  const  result  = listHelper.dummy(blogs) // We are creating variable "result", which is equal as that function So "listhelper.dummy(blogs)"
  expect(result).toBe(1) // We are making sure that result with "expect" method. expect method purpose is to wrap object value, which provides mathcer function. We are using mathcher function to identifying result  correctness.
  // whereas result of test is correct, So it  variables value is equal as 1, then it is correct, in other cases it will be error and it show  that error in terminal 
      
 
})


  
// We are determining independent test cases with function of test. So First parameter shows that test description => ("When list has only one blog equals the likes of that")
// Second parameter is function, which purpose is to show that functionality of test in this case it will be  "listWithOneBlog"
describe('total likes', () => {
  test('when list has only one blog equals the likes of that', () => {
    // We are creating function result, which equal as that "listHelper.totalLikes(listWithOneBlog)"
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(36)  // We are using expect method, that we can make sure that test. So Whereas result of test is correct, So likes is 5, but whereas result of test is not correct Then it shows error in terminal. 
  })  
})


// We are using "describe" block that we can divide that test  it into logical collections. //
describe('favorite blogs', () => { // It print that text into terminal and printing of test utilize that  name of descbribe block 
  test('when list has only one blogs of favorite blogs', () => { // We are determining independent test cases with function of test. So First parameter shows that test description 
          
    const result = listHelper.favoriteBlog(listWithOneBlog)  // We area creating function favorite, which is equal as that "listhelper.totaLikes(listwithOneBlog)"
    expect(result).toEqual(listWithOneFavoriteBlog)         // We are using expect method, that we can make sure that test. 
  })
        
})
  
  
  
