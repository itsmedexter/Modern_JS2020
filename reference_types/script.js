// reference types in primatives types, as of string

// Value type variable, stored in memory

const fruit = 'orange';

const color = fruit;

// color is still 'orange'


// reference types in an array, refernce is stored in memory, what ever is changed only in memory, value not changed

let num = [4, 5, 6, 7, 8];
let otherNum = num;
// .otherNum.pop() removes 8 from array, now when you check 'num' reference will be same with 8 removed from array