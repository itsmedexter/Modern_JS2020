// REDUCE
// Takes an array of values, reduces them down to one value

// accumulator gets the first call, then does what you want with the currentValue to return variable

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const nums = [3,4,5,6,7];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});


const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// first way
const maxGrade1 = grades.reduce((max, currVal) => {
  if(currVal > max) return currVal;
  return max;
});

// using Math.max or Math.min
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
const minGrade = grades.reduce((min, currVal) => {
  return Math.min(min, currVal);
})


// TALLYING
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y']