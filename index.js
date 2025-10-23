/*
let myLeads = []
const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("del")
 const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads =leadsFromLocalStorage
  renderLeads()
}
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

delBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads =[]
  renderLeads()

  console.log("ouch, You clicked me")


}
)
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
}) 

*/

let welcome = document.getElementById("welcome")


function hello(greeting, name, emoji){
welcome.textContent =` ${greeting}  ,${name} ${emoji}`
}

hello("Welcome back", "favour"," 🍎" )










 

