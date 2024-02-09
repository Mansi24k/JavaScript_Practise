//for loop
const arr = [3,4,5,6,7,8,9]

for(let i = 0; i< arr.length;i++){
    console.log(`the index ${i} = ${arr[i]} `)
}

// Using foreach
 let b = arr.forEach((value) =>{     // it will return the value
    console.log(value+value)
})

//for of
for(let i of arr){
    console.log(i)
}

//for in
for (let i in arr){
    console.log(i)
}

//using .map() array method
let a = arr.map((value) =>{     // it will return new array
    return value+value
})
console.log(a)

//using filter() array method
let b1 = arr.filter((a)=>{
return a < 8
})
console.log(b1)

//reduce()
let arr2 = [1,2,3,4,5,6,7,8]
let b3 = arr2.reduce((a1,a2)=>{
    return a1 + a2
})
console.log(b3);




