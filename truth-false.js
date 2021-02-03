// let age;
// // if(age){
// //   console.log('It is true.');
// // }else{
// //     console.log('It is false.');
// // };
// console.log(age);

// function add (num1, num2){
//    let total=num1+num2;
//     return
    
// }
// const result = add( 11,89);
// console.log(result);

// const nums = {my:99, you:98};
// const myNums=nums.he;
// console.log(myNums);

// const myName = 1;
// const myRollNo = true;
// if(myName===myRollNo){
//     console.log('equal value');
// }else{
//     console.log('not equal value');
// }

// const numbers = [1, 2, 1, 54, 6, 56];
// const output=[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
    
// } 
// console.log(output);

// function square(element){
//     return element*element;
// }
// function square(x){
//     return x*x;
// }

// const result = numbers.map(square);
// console.log(result);

// numbers.map(function (element, index, array){
//     console.log(element, index, array);
// }
// )
// const result = numbers.map(function(element){
//     return element*element;
// })
// const result = numbers.map(function(x){
//     return x*x;
// })
// console.log(result);

// const square = element => element * element;
// const square = x => x * x;
// const result = numbers.map(square);
// const result = numbers.map(element => element*element);
// const result = numbers.map(x => x*x);

// console.log(result);

const numbers = [2,3,8,9,4,5,77,1,88];
// const bigger = numbers.filter(x=>x<5);

const isThere = numbers.find(x => x>1);


console.log(isThere);
