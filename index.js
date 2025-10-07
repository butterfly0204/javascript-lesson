
let peopleCount =document.getElementById("People")

console.log (peopleCount)

let count = 0
 

function increment(){
  count = count + 1
  peopleCount.innerText = count


}

increment()
