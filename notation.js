const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}

const name = student['name'];
// console.log(name);

const personAge = 'age';
const age = student[personAge];
// console.log(age);

// const chemistry = student['marks']['chemistry'];
console.log(chemistry);