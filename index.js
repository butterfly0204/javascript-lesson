let data = [
  {
    player: "jane",
    score: 53
  },
  {
    player: "mark",
    score: 41
  }
]


let janeScore =document.getElementById("jane")

janeScore.addEventListener("click", function(){

  console.log(data[0].score)


})