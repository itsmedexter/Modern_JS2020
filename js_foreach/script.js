const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // this is a anonymous function, used to only run once
// numbers.forEach(function (num) {
//   console.log(num * 2);
// })

// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);


// adding second parameter forEach method, the second parameter can be used to find index, you can capture index by using second parameter
numbers.forEach(function(num, idx) {
  console.log(idx, num);
})




const books = [{
  title: 'Good Omens',
  author: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},{
  title: 'Bone: The Complet Edition',
  author: ['Jeff Smith'],
  rating: 4.42
},{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]


// three different ways to loop through array, forEach method latest and easiest unstead of using 'for of' or standard 'for' loop
books.forEach(function(book){
  console.log(book.title.toUpperCase())
});

for(let book of books) {
  console.log(book.title.toLowerCase());
}

for(let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}

// adding second parameter forEach method, the second parameter can be used to find index, you can capture index by using second parameter

const characters = ['mario', 'luigi', 'princess'];

characters.forEach(function(char,idx) {
  console.log(idx, char);
});