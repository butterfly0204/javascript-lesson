let emojis = ["🦁", "🦍", "🐕‍🦺", "🐘", "🐅", "🐐", "🐍", "🦂", "🐜"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function fighter(){
  let fightButton1=Math.floor(Math.random() * emojis.length)
  let fightButton2=Math.floor(Math.random() * emojis.length)
  stageEl.textContent = emojis[fightButton1] + "vs" + emojis[fightButton2]

  
}



