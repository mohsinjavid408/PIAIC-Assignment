"use strict";
function showMagicians(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        console.log(magicians1[i]);
    }
}
function makeGreat(magicians1) {
    let greatMagicians = [];
    for (let i = 0; i < magicians1.length; i++) {
        greatMagicians.push(magicians1[i] + " the Great");
    }
    return greatMagicians;
}
let magicians1 = ['Harry Houdini', 'David Blaine', 'Teller'];
let greatMagicians = makeGreat([...magicians1]);
console.log("Original Magicians:");
showMagicians(magicians1);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
// Original Magicians:
// Harry Houdini
// David Blaine
// Teller
// Great Magicians:
// Harry Houdini the Great
// David Blaine the Great
// Teller the Great
