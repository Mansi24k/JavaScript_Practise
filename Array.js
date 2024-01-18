let number = [91,25,63,79]
console.log (number.length)
console.log (number [3])

//using for loop print the value inside the array
for (let i = 0; i < number.length ; i++ ){
    console.log( `the value inside number array at position ${[i]} is`, number[i])
}

//Some Array Methods

//1. toString()
A = number.toString()
console.log (A, typeof A)

//2. join()
B = number.join("_")
console.log (B, typeof B)

//3. pop()
C = number.pop()
console.log (number, C)

//4. push()
D = number.push(56)
console.log (number, D)

//5. shift()
E = number.shift()
console.log (number, E)

//6. unshift()
F = number.unshift(99)
console.log (number, F)

//7. concat()
let a1 = [1,3,5]
let a2 = [4,5,6]
let a3 = [21,22,25,26]
let newArray = a1.concat(a2)
console.log(newArray)
let newArray1 = a1.concat(a2,a3) // we can concat more arrays also
console.log(newArray1)
console.log(a1)
console.log(a2)
console.log(a3)

//sort()
let num1 = [55,63,12,52,20,21,554,116,33]
console.log(num1.sort()) //it always return output in alphabetically order if you want in Ascending  or Descending order then have to give compare function

let compare = (a,b) =>{
    return a-b // for descending order b-a
}
let num2 = [55,63,12,52,20,21,554,116,33]
console.log(num2.sort(compare)) // returns in ascending order

//reverse()
let num3 = [1,2,3,4,5,6,7,8,9]
console.log(num3.reverse())

//splice()
let num4 = [25,3,5,62,12,65]
let Out =num4.splice(2,3,102,103,104,105)
console.log(num4) // return the modified array
console.log(Out) // returns the deleted items from the array

// slice()
let num5 = [5,6,7,8,14,26]
let a = num5.slice(2)
let b = num5.slice(0,5)
console.log(a)
console.log(b)

 //  delete operator 
 let num = [1,2,3,4,5,6]
 delete num [1]
 console.log(num)
 console.log(num.length) // delete operator does not affect the length of an array
