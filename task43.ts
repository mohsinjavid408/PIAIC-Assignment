function showMagicians(magicians1: string[]): void {
    for (let i = 0; i < magicians1.length; i++) {
        console.log(magicians1[i]);
    }
}

function makeGreat(magicians1: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians1.length; i++) {
        greatMagicians.push(magicians1[i] + " the Great");
    }
    return greatMagicians;
}

let magicians1: string[] = ['Harry Houdini', 'David Blaine', 'Teller'];
let greatMagicians: string[] = makeGreat([...magicians1]);

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