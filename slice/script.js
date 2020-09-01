// splice method removing, replacing, or adding new elements in array. You can place new elements in middle of array.

// it takes three argument array.splice(start[, deleteCount[, item[, item2[, ...]]]])

// VERY GOOD USE WHEN YOU WANT TO DELET A BIG CHUNK OF AN ARRAY, OR ADD IN THE MIDDLE OF AN ARRAY

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//INSERTING WITH SPLICE: first argument is where you want to start, second is how many you want to delet, ,
animals.splice(1, 0, 'octopus');

// DELETING WITH SPLICE: start index is at three, how many you want to delete starting at index three
animals.splice(3, 2);

//ADDING WITH SPLICE: start index after salmon, adding two new animals
animals.splice(3, 0, 'snake', 'frog');

// REPLACING WITH SPLICE: start index, how many to delete, replacing with upper case version
animals.splice(0, 1, 'SHARK');
