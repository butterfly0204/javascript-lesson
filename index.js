
let myLeads = `["www.google.com"]`
myLeads = JSON.parse(myLeads)

myLeads.push("www.google.com")

const inputEL = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")

localStorage.setItem("myName", "Mogaji Favour")


myName =localStorage.getItem("myName")

console.log(myName)

localStorage.clear()

 



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value)
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








 

