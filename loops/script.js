// for loops 
// for(initialExpression; condition; increment Expression)

for (let i = 1; i <= 20; i++) {
  console.log(`${i}x${i} = ${i * i}`)
}

for (let i = 10; i >= 0; i -= 2) {
  console.log('hello', i)
}

const examScores = [98, 77, 84, 91, 57, 66]

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores);
}

const myStudent = [{
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 91
  }
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