 let firstCard = 11
let secondCard =  1
let sum = firstCard + secondCard
let hasBlackJack = false
isALive = true
let message =  " "
let sumEL = document.getElementById("sum-el");
let messageEl = document.getElementById("mesage-el");
let cardEl = document.getElementById("card-el");


function startGame(){

         sumEL.textContent = "sum: " + sum
         cardEl.textContent = "Cards:" + firstCard + "   "  + secondCard
    if(sum <= 20){
    
        message ="Do you want to draw a new card ? " 
       
    
    }
    else if(sum === 21){
        message = "YOu've got Blackjack "
        hasBlackJack = true
    
    }
    else{
    
       message ="You are out of the game! "
        isAlive = false
    }

    messageEl.textContent = message  

}




    



    
