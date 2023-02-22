const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const lessFive = numbers.find(num => num % 5 === 0);
// console.log(lessFive);

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const productCheap = products.find(pd => pd.price <= 30000);
console.log(productCheap);