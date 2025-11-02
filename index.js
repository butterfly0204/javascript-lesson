// Object destructing enables us to extract
//  properties from objects into distinct variables//
 const dreamHoliday = {
   destination: 'new york',
   activity: 'statue of liberty',
   accomodation: 'fancy hotel',
   companion: 'peace',
 } 

 const {destination, activity, accomodation, companion} = dreamHoliday

 console.log(`i would love to go to ${destination}, texas to visit the ${activity} i'd sleep in a ${accomodation} and hang out with ${companion} all day`)
