// for loops
// for(initialExpression; condition; increment Expression)

for (let i = 1; i <= 20; i++) {
  console.log(`${i}x${i} = ${i * i}`);
}

for (let i = 10; i >= 0; i -= 2) {
  console.log('hello', i);
}

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores);
}

const myStudent = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
  {
    firstName: 'Apollo',
    grade: 91,
  },
];

for (let i = 0; i < myStudent.length; i++) {
  let student = myStudent[i];
  console.log(i, `Student ${student.firstName}'s grade is ${student.grade}`);
}

let total = 0;

for (let i = 0; i < myStudent.length; i++) {
  let student = myStudent[i];
  total += student.grade;
  console.log(total / myStudent.length);
}

const word = 'stressed';
let reversed = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
  console.log(reversed);
}

// NESTED LOOPS

for (let i = 0; i <= 10; i++) {
  console.log('Outer Loop:', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('   Inner Loop', j);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

// While loop
// while(some condition is true) {run this code in here}
// Sample
let j = 0;

while (j <= 5) {
  console.log(j);
  j++;
}
// 1
// 2
// 3
// 4
// 5
// 6 loop is false, then completed and stops

// a while loop is good for when you dont know how many times it is going to run.

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  //  this has to be false or you go into infinite loop
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS, YOU WIN`);

// while(some condition)
// in th loop, update or attempt to make that condition false

// BREAK
for (let i = 0; i < 10; i++) {
  // loop runs up to 10
  console.log(i);
  if (i === 5) {
    // if statement, when i reaches 5, runs code "break" to stop loop
    break;
  }
}

// FOR...OF
// A nice and easy way of iterating over arrays or other iterable objects

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// same as usual for loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

// For...of sample
for (let sub of subreddits) {
  console.log(sub);
}

for (let char of 'you crazy') {
  console.log(char.toUpperCase());
}

// SAMPLE 2 FOR...OF

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// regular for loop
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// For...of loop
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// FOR...IN LOOP
// ITERATING THROUGH AN OBJECT, USING OBJECT.KEYS()

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'in Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Caraline: 7.5,
};

for (let movie in movieReviews) {
  console.log(`Name of movie: ${movie} Rating: ${movieReviews[movie]}`);
}

let total2 = 0;
for (let movie in movieReviews) {
  total2 += movieReviews[movie];
  console.log(`Movie reviews average: ${total2}`);
}
