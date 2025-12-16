// Promise challenge

function preLoading(url) {
    return
}

try{
    const results = await preLoading('https://jsonplaceholder.typicode.com/posts');
    console.log(results);
    document.getElementById('img-container').appendChild(results);
}

catch (error) {
    console.error('Error fetching data:', error);
}

 