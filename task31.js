"use strict";
let Usernames = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
if (Usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < Usernames.length; i++) {
        if (Usernames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${Usernames[i]}, thank you for logging in again.`);
        }
    }
}
// Hello admin, would you like to see a status report?
// Hello Eric, thank you for logging in again.
// Hello John, thank you for logging in again.
// Hello Jane, thank you for logging in again.
// Hello Alice, thank you for logging in again.
