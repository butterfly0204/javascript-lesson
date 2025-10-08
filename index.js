let People  = document.getElementById("People-entered")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
 count += 1
   People.textContent = count
}  
increment()


function save() {
   let countStr = count + " - "
   saveEl.textContent += countStr
    count = 0

 
    People.textContent = 0
     
}   

save()

