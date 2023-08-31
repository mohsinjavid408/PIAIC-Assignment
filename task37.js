"use strict";
function Make_shirt(size = "L", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
}
Make_shirt(); // Large shirt with default message
Make_shirt("M"); // Medium shirt with default message
Make_shirt("S", "TypeScript is awesome!"); // Small shirt with custom message
// The shirt size is L and the message printed on it is "I love TypeScript".
// The shirt size is M and the message printed on it is "I love TypeScript".
// The shirt size is S and the message printed on it is "TypeScript is awesome!".
