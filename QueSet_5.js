//1. Creates an array of numbers and take input from the user to add numbers to this array
const prompt = require ('prompt-sync')();

let number = [10,22,30]
let num1 = prompt("Enter a number to add in array:")
number.push(Number(num1))
console.log(number);

//2. keep Adding numbers to the first array until 0 is added to the array.
let num2
do{
num2 = prompt("Enter a number to add in array:")
number.push(Number(num2))
}while(num2 != 0)
console.log(number);

//3. Filter For number divisible by 10 from a given array

let newArr = number.filter((value)=>{
   return value%10 == 0 
})
console.log(newArr)

//4. create an array of square of given number in first array

let newArr1 = number.map((x)=>{
    return x*x
})
console.log(newArr1);

//5. Use reduce to calculate Factorial of a given number from an array of first n natural number
//  (n being the number whose factorial needs to be calculated).
let n = [1,2,3,4,5,6,7,8]
let new3 = n.reduce((n1, n2)=>{
    return n1*n2
})
console.log(new3);
