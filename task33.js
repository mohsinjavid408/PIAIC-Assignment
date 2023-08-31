"use strict";
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] === 1) {
        console.log(`${Numbers[i]}st`);
    }
    else if (Numbers[i] === 2) {
        console.log(`${Numbers[i]}nd`);
    }
    else if (Numbers[i] === 3) {
        console.log(`${Numbers[i]}rd`);
    }
    else {
        console.log(`${Numbers[i]}th`);
    }
}
// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8th
// 9th
