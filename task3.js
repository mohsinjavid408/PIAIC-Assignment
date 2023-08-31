"use strict";
let pesrson2 = "mohsin khan";
console.log(pesrson2.toUpperCase());
console.log(pesrson2.toLowerCase());
let personName = "mohsin khan";
let titlecaseName = personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(titlecaseName);
