// Map: Creates a new array with the results of calling a callback on every element in the array

// used to extract portions of an array, or transform an array with a new array

// maps one array and makes it into a new array

const numbers =[20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
  // you need to 'return' a value if not it will be undefined
  return num * 2;
});

const even = numbers.map(function(n) 
{
  return {
    value: n,
    isEven: n % 2 === 0
    }
  })


  const abbrevs = words.map(function(word) {
    return word.toUpperCase().split('').join('.')
  })