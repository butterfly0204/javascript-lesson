let emojis = ["🦁", "🦍", "🐕‍🦺", "🐘", "🐅", "🐐"]

function fighter(){
  let pickFighters =Math.floor(Math.random() *6)
  return emojis[pickFighters] 
}

console.log(fighter())
console.log(fighter())