
let myLeads = ["wwwmawesomelead.com", "www.epiclead.com", "www.geatlead,com"]
let inputEL = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    console.log(myLeads)
} )     

for (let i=0; i < myLeads.length; i++){
    console.log(myLeads[i])


}

