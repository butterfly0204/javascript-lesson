//WHat is API? An Api is any tools that helps connect our program with someoneelse's program.
//For example: when we use google maps in our app, we are using google maps API to connect our app with google maps program.

//API stands for Application Programming Interface. It is a set of rules and protocols for building and interacting with software applications. APIs allow different software systems to communicate with each other, enabling them to share data and functionality.
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
 
    const imgElement = document.createElement('img')
    imgElement.src = data.message
    imgElement.alt = 'A Random Dog'
    document.getElementById('img-container').appendChild(imgElement)
   
})

  