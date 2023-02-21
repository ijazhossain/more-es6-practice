/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/
// with for loop
/* const convertOddTOEven = (oddArray) => {
    let evenArray = [];
    for (let i = 0; i < oddArray.length; i++) {
        evenArray.push(oddArray[i] + 1);
    }
    return evenArray;
}
const result = convertOddTOEven([1, 3, 5, 7, 9]);
console.log(result); */

// with map()
const convertOddTOEven = (oddArray) => {
    let evenArray = [];
    oddArray.map(item => evenArray.push(item + 1));
    return evenArray;
}
const result = convertOddTOEven([1, 3, 5, 7, 11]);
console.log(result); 