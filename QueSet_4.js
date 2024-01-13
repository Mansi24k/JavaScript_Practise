// 1. What will the following print in javascript? 
let str3 = "man\""
console.log("man\"".length)

//ans: it will give 4 as output because \" is a single escape sequence character

//2. write a program to understand starts with and end with function of a string.
 let text = "Hello everyone how are you?"
let result1 = text.startsWith("Hello")
let result2 =text.endsWith("you?")
console.log(result1)
console.log(result2)

//3.Write a program to convert given string to Lowercase.
 let str = "BUTTER FLY"
console.log(str.toLowerCase())

//4. Extract the amount out of this string. string is "please give Rs 1000"

let str1 = "please give Rs 1000"
console.log(str1.slice(12))

//5. Try to change 4th character of given string were you able to do it? the string is Give Me Rose change R into P

//YES WE CAN DO IT WITH THE HELP OF REPLACE PROPERTY OD STRING

let char = " Give Me Rose"
console.log(char.replace('R','P'))