 let firstCard = 12
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el") 



function startGame() {
  if (sum <= 20){
  message = "Do you want to draw a new card?"
  sumEl.textContent = "Sum: " + sum

}
else if (sum === 21){
  message = "Wohoo! You've got Blackjack!"
    sumEl.textContent = "Sum: " + sum

  hasBlackJack = true
}
else {
  message = "You're out of the game!"
 
  isAlive = false
    sumEl.textContent = "Sum: " + sum
}


messageEl.textContent = message
cardsEl.textContent ="Cards:" + firstCard + "   " + secondCard


}


