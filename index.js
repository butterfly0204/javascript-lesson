// The promise constructor

const promise = new Promise ((resolve, reject) => {
    const success = Math.random() > 0.5;
    if(success) {
        resolve("Operation was successful!");
    }
    else{
        reject("Operation failed.");
    }
})

