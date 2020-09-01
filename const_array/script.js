// an array can be a const as long as the reference remains the same

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green';

// YOU CAN NOT REASSIGN OR CHANGE REFERENCE
myEggsx = ['blue', 'pink'];


// to access arrays within arrays, use index, you can index in subarrays
// sample animalPairs[1][0] accesses index 1 array ['ewe', 'ram'] and second index [0] selects access to first one in that subarray 'ewe'
const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];



// nested arrays, think of below as a 3 by 3 or tick, tac, toe game

const board = [
  ['O', null, 'X'],
  [null, 'X', 'O'],
  ['X', 'O', null]
];