function make_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
}

make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly", "honey");


// You ordered a sandwich with the following items:
// - ham
// - cheese
// - lettuce
// You ordered a sandwich with the following items:
// - turkey
// - bacon
// You ordered a sandwich with the following items:
// - peanut butter
// - jelly
// - honey