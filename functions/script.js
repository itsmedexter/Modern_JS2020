// Basic functions, name of the function > argument > logic
function meYelling() {
  for (let i = 0; i < 10; i++) {
    console.log('hey you!'.toLocaleUpperCase());
  }
}
meYelling();

// sample dice roll
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

// updated to add number to function throwDice to get amount of rolls. call function and add number to parameters
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

// Function Arguments; inputs to a function
function greet(person) {
  console.log(`Hi ${person}`);
}

function square(num) {
  console.log(num * num);
}

// function with multiple arguments/parameters
function sum(x, y) {
  console.log(x + y);
}

function divide(a, b) {
  console.log(a / b);
}

// return can be passed on to anotheor function
// rules
// * you can only return one thing from a function
// return statement ends function execution
function addNum(a, b) {
  return a + b;
}

function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  }
  return false;
}

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}

// password must:
// be at least 8 characters long
// cannot contain spaces
// canont contain the username
function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// another way
function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
  // another
  // if(!tooShort && !hasSpace && !tooSimilar) return true; return false

  // shorter
  // return !tooShort && !hasSpace &&tooSimilar;
}

// average
function avg(arr) {
  let total = 0;
  // loop over each num
  for (let num of arr) {
    // add them together
    total += num;
  }
  // divide by number of nums
  return total / arr.length;
}
