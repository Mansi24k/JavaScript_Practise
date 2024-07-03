const prompt = require ('prompt-sync')();
let randomNum=Math.floor(Math.random() * 100);
let userInput
let score =100

while(userInput != randomNum){
 score= score-1
 userInput = Number(prompt("Enter A Number from 1 to 100 to guess correct random number: "))
 if(randomNum == userInput){
    console.log(`the number guessed is correct. guessed number is: ${userInput} `)
    console.log(`you guess the actual number in ${100-score} chances, and the random number is: ${randomNum}`);
}
else if(userInput<randomNum){
    console.log(`the number guessed is smaller than random number.  guessed number is: ${userInput} `);
}
else{
    console.log(`the number guessed is greater than random number.  guessed number is: ${userInput} `);
}
}




