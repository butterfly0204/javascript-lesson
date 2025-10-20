
let myLeads = `["www.google.com"]`
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")

leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)





 



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
}) 

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++){

   listItems += 
   `<li> 
   <a href = ' ${myLeads[i]}' target='_blank'>  ${myLeads[i]}  </a>
   
   </li> `
  }
  ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
 inputEL.value =""
})








 

