 const sentence = generateSentence("countries", ["america", "nigeria", "london", "egypt"])
 
 function generateSentence(desc, arr){
 let baseString =`the ${arr.length} ${desc} are `
    for (i=0;  i< arr.length; i++){
       
        baseString += arr[i] +" "
    }

    return baseString

 }

 console.log(sentence)