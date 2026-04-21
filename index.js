   let people = document.getElementById("count-el")
   let saveEl = document.getElementById("save")
  let count = 0;  

 function increment(){
   count = count +1;
         people.innerText = count
//console.log(count)
 }
 increment()

  function decrement(){
      count = count -1;
        people.innerText = count
      //console.log(count)
  }

 decrement()

  function save(){
   let  output = count + " -"
     saveEl.textContent += output
     people.textContent =0
     count =0

  }
save()




