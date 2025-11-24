// Advance API version
try{
const baseUrl = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
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


 
