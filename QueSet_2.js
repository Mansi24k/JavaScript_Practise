//1. Use logical Operator to find whether the age of a person lies between 10 and 20.

const prompt = require ('prompt-sync')();
 let age = prompt("Enter the age:")
 if(age>10 && age<20){
    console.log("the person age is in between 10 and 20");
 }
 else{
     console.log("the person age is not between 10 and 20")
 }

//2. Demonstrate the use of Switch Case Statements in js.

let fruit = prompt("enter the fruit name to know the price:"); //the code is for understanding purpose.
switch(fruit){
    case 'Mango' : 
    console.log("Cost of Mango is 5 Rs")  
    break;
    case 'Apple' : 
    console.log("Cost of Apple is 10 Rs")
    break;
    case 'Banana' : 
    console.log("Cost of Banana is 6 Rs")
    break;
    default:
        console.log("no fruit available")
}
 
//3. write a js program to find whether a number is divisible by 2 and 3.

let number1 = prompt("enter a number:")
if(number1 % 2==0 && number1 % 3==0){
    console.log("number is divisible by both 2 and 3")
}
else{
    console.log("number is not divisible")
}

//4. write a js program to find if the number is divisible by either 2 or 3.
let number = prompt("enter a number:")
if(number % 2==0){
    console.log("number is divisible by 2")
}
else if(number % 3==0){
    console.log("number is divisible by 3")
}
else{
    console.log("number is not divisible by both 2 and 3")
}

//5. print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.
let age1 = prompt("enter the age")
 console.log("you",(age1>=18)?"can drive":"cannot drive")