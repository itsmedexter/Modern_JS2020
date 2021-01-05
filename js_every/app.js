// EVERY
// tests wheater all elements in the array pass the proviced function. It return a Boolean Value.
// Needs all to past the test

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const allEndInG = words.every(word => {
  const last = word.length -1;
  return word[last] === 'g';
})


// SOME
// Similar to every, but returns true if ANY of the array elements pass the test function
// Needs only one to pass test

const someStartWithD = words.some(word => word[0] === 'd');
const allStartWithD = words.every(word => word[0] === 'd');


// const allGoodBooks = books.every(book => book.rating > 3.5);
// const any2Authors = books.some(book => book.author.length === 2);