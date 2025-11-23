// Handling Rejected Promises
      
    try{
         const response = await fetch('https://api.example.com/data')
          const data = await  response.json()
          console.log(data)

    } 
    catch(error){
        console.log(error)
       
    }  

    finally{
        console.log('Fetch attempt finished.')

    }