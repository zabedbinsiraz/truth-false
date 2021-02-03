let numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(element){
//     console.log(element);
// })

// let result = numbers.forEach(function(x){
//    console.log(x);
// });

// const result=numbers.map(x=>x*x);
// console.log(result);

// const x = numbers.forEach(x => x * x);
// console.log(x);

const numbers = [2, 3, 4];
const squareNumbers = [];
numbers.forEach(function(x){
    squareNumbers.push(x*x);
})
console.log(squareNumbers);