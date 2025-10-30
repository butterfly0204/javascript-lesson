const playerGuss = 6
const correctAnswer = 6


let message = playerGuss === correctAnswer? "Correct" : 
playerGuss > correctAnswer? " too high" : playerGuss < correctAnswer? "too low" :"wrong"

console.log (message)