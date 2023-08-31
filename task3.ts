let pesrson2 ="mohsin khan"
console.log(pesrson2.toUpperCase());
console.log(pesrson2.toLowerCase());

let personName: string = "mohsin khan";
let titlecaseName: string = personName.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

console.log(titlecaseName);
