//rest paramter example 

//  Extra: Didnt commit for two days and i am already forgeting i have been doing, Nevr go a day withot coding  guys//
function setPermissionLevel(permissionLevel, ...names) {
names.forEach((name) => console.log (`${name} has been granted ${permissionLevel} access.`));
   
    }

    setPermissionLevel("Admin", "Alice", "Bob", "Charlie");

