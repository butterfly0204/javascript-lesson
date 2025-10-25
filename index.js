 const sentence = generateSentence("countries", ["america", "nigeria", "london"])
 
 function generateSentence(desc, arr){

    for (i=0;  i< arr.length; i++){
        let baseString =`the ${arr.length} ${desc} are`
        baseString += arr[i]
    }

 }
