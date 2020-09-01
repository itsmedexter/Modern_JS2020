// objects can group: key,value pairs
// collections of properties
// accessing data using index, we use custom keys

const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13'
};

console.log(fitBitData);

// object literal = {}
// you can use const, as long as you do not change reference

// you can use dot syntax to get information, sample:
fitBitData.totalMiles
// gives you totalMiles data
// All keys are converted to strings, except for symbols

// YOU NEED COMMAS TO SEPERATE KEY-VALUE PAIRS, you can also use trailing comma for single key-value pair to end declaration

// -----------------------------


const numbers = {
  100: 'one hundred',
  15: 'sixteen'
}

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
};

let mysteryColor = 'yellow'

// use brackets to access invald identifiers
palette['blue'];
// to get value of blue in 'palette' variable

palette[mysteryColor];
// will get you '#f9ca24'



// -----------------------------

// ADDING TO OBJECT
const userReviews = {};
// you can use dot notation or brackets to add as long as you make key-value pair
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith = 3.5;

// adding to value
userReviews['queenBee49'] += 2;
userReviews.mrSmith++;
// changes values to queenBee49 = 6.0, mrSmith = 4.5

// -----------------------------
const student = {
  firstName: 'David',
  lastName: 'Jones',
  strength: ['music', 'art'],
  exams: {
    midterm: 92,
    final: 88
  }
};

// acccess data in objects by using dot notation
const avg = (student.exams.midterm + student.exams.final) / 2;

// access data in object that key-value is an array
student.strength[1];
// gives access to 'art' which is in an array that is a value of 'strength', which is inside an object assigned to 'student'

// -----------------------------
// ARRAY OF OBJECTS

const shoppingCart = [{
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
];

// in this situation you can multiply price by quantity to get total amount

// -----------------------------
// use objects to define players in a game of tic, tac, toe

const game = {
  player1: {
    username: 'Blue',
    playingAs: 'X'
  },
  player2: {
    username: 'Muffins',
    playingAs: 'O'
  },
  board: [
    ['O', null, 'X'],
    [null, 'O', 'X'],
    ['X', 'O', null]
  ]
};

// -----------------------------

// referencing palette variable above
// const palette = {
//   red: '#eb4d4b',
//   yellow: '#f9ca24',
//   blue: '#30336b'
// };

const palette2 = palette;
palette2.green = '#ebf876';
// adds to palette and palette2 variable reference that is stored in memory

// OBJECTS ARE REFERENCE TYPES LIKE ARRAYS, IT CAN BE A CONST AS LONG AS REFERENCE DOESN'T CHANGE

// -----------------------------

// ARRAY, OBJECTS EQUALITY

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;


// nums === mystery, will be false
// They 'look' the same, but refer to different arrays

// nums == moreNums, will be true
// these two arrays reference the exact same array, so we get true

// think of variables will have different reference points in memory, even though the array has the same information

// each variable get's its own location in memory