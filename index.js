// Object destructing enables us to extract
//  properties from objects into distinct variables//
 const favouriteFilm = {
    title: "top gun",
    year: " 1986",
    genre: "action",
    star: " Tom Cruise",
    director: "Tony Scott"

 }

 const {title, year, genre, star, director} = favouriteFilm

 console.log(`my favourite fil is ${title}, starring ${star}.
               its an ${genre} directed by ${director} and was released in ${year}`)
