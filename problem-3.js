/* 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
const myArray = [33, 50, 79, 78, 90, 101, 30];
const result = myArray.find(item => item % 10 === 0);
// console.log(result);

/* 
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
const newArray = [1, 9, 17, 22];
const total = newArray.reduce((previous, current) => previous + current, 0);
console.log(total);