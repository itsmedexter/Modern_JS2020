// arrow functions are same as regular functions, just shorter

const isEven = (num) => {
  return num % 2 === 0;
}

const multiply = (x,y) => {
  return x * y;
}

const greet = () => {
  console.log('Hello there!')
}



// Implicit Return: you don't have to write the return keyword

//before 
// const square = n => {
//   return n * n;
// }

// after
const square = n => (
  n * n
)

// single line Implicit Return:
const times = n => n * n;

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function(n) {
  return n * 2;
});

const doubles2 = nums.map(n => {
  return n * 2;
});

const doubles3 = nums.map(n => n * 2)





const parityList = nums.map(function(n) {
  if(n % 2 === 0) return 'even';
  return 'odd';
})

const parityList2 = nums.map((n) => {
  if(n % 2 === 0) return 'even';
  return 'odd';
});

// using a turinary operator : "else"
const parityList3 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));