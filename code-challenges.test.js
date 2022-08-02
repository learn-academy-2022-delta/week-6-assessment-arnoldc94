// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("objectSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", ()=> {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      ]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

      expect(objectSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      
  })
})

//ReferenceError: objectSentence is not defined


// b) Create the function that makes the test pass.
// Pseudo----->
// create a function named objectSentence
// Pass in an arr paramater
// iterate over the array paramater using the map higher order function.
// create a variable named caps variable that will hold the capitalized name in each object
// Use the replace method on the iterated value.name of the each object
// Use a ternary operator to check for the first letter and the first letter after whitespace ((/(^\w|\s\w)/g)
// for each iteration set the word.toUppercase()
// return `${caps} is ${value.occupation}.`

const objectSentence = (arr) => arr.map(value=>{
  let caps = value.name.replace(/(^\w|\s\w)/g, word => word.toUpperCase())
  return `${caps} is ${value.occupation}.`
})

// PASS  ./code-challenges.test.js
// objectSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (4 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", ()=> {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//ReferenceError: remainder is not defined

// b) Create the function that makes the test pass.
// Pseudo ----->
// Create a function named remainder
// pass in an arr paramater
// iterater over the array using the filter higher order function
// Check if the typeof each value is strictly equal to 'number' datatype.
// use the map higher order function to iterate over the numbers
// each iteration take the value modulo 3 returning the remainder.

const remainder = (arr) => arr.filter((value) => typeof value === 'number' ).map(value => value % 3)

// PASS  ./code-challenges.test.js
// remainder
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubedArr", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", ()=> {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      expect(sumCubedArr(cubeAndSum1)).toEqual(99)
      expect(sumCubedArr(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumCubedArr is not defined

// b) Create the function that makes the test pass.
// Pseudo----->
// Create a function named sumCubedArr
// Pass in an arr paramater
// Use the reduce method on the arr paramater to accumulate the total and iterate over the current element.
// add the accumulator(acc) to Math.Pow(current,3) 
// Set the accumulator to start at 0

const sumCubedArr = (arr) => arr.reduce((acc, cur) => acc +  Math.pow(cur,3),0)

// PASS  ./code-challenges.test.js
//sumCubedArr
// ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

