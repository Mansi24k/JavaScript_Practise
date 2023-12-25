//1. Create a Variable of type String and try to add a number to it
let a = "Mansi"
let b = 25
console.log(a+b)

//2.use typeof Operator to find datatype of the string in last question
console.log(typeof(a))

//3. Create a const object in javascript can you change it to hold a number later?
const item = {
    name:"mansi",
    class:5, 
 }
 console.log(item)
//can you change it to hold a number later? 
 const x = item
 x.class= 6
 console.log(item)

 //4. try to add new key to the const object in problem 3 were you able to do it?
 item.percentage = "90%"
 console.log(item)

 //5.Write a JS program to create a word dictionary of 5 words.
 console.log("5 Words Dictionary")
 const dict = { 
       Brusque:"short and abrupt",
      Cajole: "to urge",
      Jabber: "to talk in a noisy or excited manner",
      Jostle: "make one’s way by pushing or shoving",
      Flabbergasted: "astounded" 
 }
 console.log(dict)


