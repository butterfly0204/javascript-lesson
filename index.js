/*
let myLeads = ["wwwmawesomelead.com", "www.epiclead.com", "www.geatlead,com"]
let inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

const inputBtn = document.getElementById("input-btn")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    console.log(myLeads)
} )     

for (let i=0; i < myLeads.length; i++){
   ulEl.textContent += myLeads[i] + " "


}
   */


let myContainer = document.getElementById("container")

 
myContainer.innerHTML = "<button onClick = 'buy()'> Buy !  </button>"

function buy(){
     myContainer.innerHTML += "<p> Thank for buying </p>"
}
buy()
