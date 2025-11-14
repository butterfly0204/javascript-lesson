//callback in javascript 

function  notifyUser(notificationFn){
    notificationFn()
}

const emailNotification = ()=> {
    console.log("You have a new email")
}
const smsNotification = ()=> {
    console.log("You have a new SMS")
}


notifyUser(emailNotification)
notifyUser(smsNotification)