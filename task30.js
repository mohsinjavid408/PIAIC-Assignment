"use strict";
let usernames = ['admin', 'Eric', 'John', 'Jane', 'Alice'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
// Hello admin, would you like to see a status report?
// Hello Eric, thank you for logging in again.
// Hello John, thank you for logging in again.
// Hello Jane, thank you for logging in again.
// Hello Alice, thank you for logging in again.
