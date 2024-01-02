// 1. write a program to find the marks of a student in an object using for loop.

let marks={
     Mansi:90,
     Sana:92,
     Rohit:88,
}
//Ans:
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("tne marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]) 
}
//index start from o, so when i=0 it means mansi and condition < length meansi 3<4 i=3 is rohit



// 2. write the program in Q1 Using for loop in  loop

for(let a in marks){
    console.log("The Marks Of "+ a +" are " +marks[a])
}



// 3. write a program to print "try again" until the user enters the correct number.
const prompt = require ('prompt-sync')();
let correct_num = 4
let i 
while(i != correct_num){
    console.log("Try again")
    i = prompt("enter a number")
     //when you entered incorrect num
}
console.log("you entered correct number") //when you enter correct number 4 




// 4.write a function to find mean of 5 number.

const num = () => {
   return (a+b+c+d+e)/5
}

let a,b,c,d,e;
a= prompt("enter first value")
a = Number.parseInt(a)
b= prompt("enter first value")
b = Number.parseInt(b)
c= prompt("enter first value")
c = Number.parseInt(c)
d= prompt("enter first value")
d = Number.parseInt(d)
e= prompt("enter first value")
e = Number.parseInt(e)

console.log("mean of 5 numbers that you entered is:",num(a,b,c,d,e))