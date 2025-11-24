// Advance API version
// GET getting data 
// POST posting data
// PUT updating data
// DELETE deleting data
// PATCH updating partial data


try{
const baseUrl = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'POST',
     body: JSON.stringify( {
        title: ' Holiday Nightmare',
        body: 'My holiday was ruined by bad weather.',
        userId: 100


    }),
    header:{
    'content-Type':'application/json'
}
})
if(!baseUrl.ok){
    throw new Error(`HTTP error! status: ${baseUrl.status}`);
}


const getPosts = await baseUrl.json() 
console.log(getPosts);
}



catch(error) {
    console.error(error);
}

finally {
    console.log("Fetch attempt finished.");
}



 
