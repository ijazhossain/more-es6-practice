const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const largeNumbers = numbers.filter(number => number > 20);
console.log(largeNumbers);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 23000 },
];

const expensive = products.filter(pd => pd.price > 40000);
console.log(expensive);