   let people = document.getElementById("count-el")
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
     console.log (count)

  }
save()


