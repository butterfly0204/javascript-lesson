let increaseNum =document.getElementById("People") 
let count = 0

console.log(count)

function increment(){
  count = count + 1;
  increaseNum.innerText = count;
}


increment()

function save() {
  console.log(count)
}

save()
