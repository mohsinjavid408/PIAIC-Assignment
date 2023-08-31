"use strict";
function Show_magicians(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
function make_great(Magicians) {
    let great_magicians = [];
    for (let i = 0; i < Magicians.length; i++) {
        great_magicians.push(Magicians[i] + " the Great");
    }
    return great_magicians;
}
let Magicians = ['Harry Houdini', 'David Blaine', 'Teller'];
let great_magicians = make_great(Magicians);
console.log("Original Magicians:");
Show_magicians(Magicians);
console.log("\nGreat Magicians:");
Show_magicians(great_magicians);
// Original Magicians:
// Harry Houdini
// David Blaine
// Teller
// Great Magicians:
// Harry Houdini the Great
// David Blaine the Great
// Teller the Great
