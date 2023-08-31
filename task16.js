"use strict";
var guestList1 = ["ali", "asim", "osman"];
// Print a message about the bigger dinner table
console.log("Good news! I found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList1.unshift("adil");
// Add one new guest to the middle of the array
guestList1.splice(2, 0, "izaz");
// Use push() to add one new guest to the end of the array
guestList1.push("zia");
// Print a new set of invitation messages
for (const guest of guestList1) {
    const message = `Dear ${guest}, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]`;
    console.log(message);
}
// Good news! I found a bigger dinner table.
// Dear adil, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear ali, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear izaz, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear asim, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear osman, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear zia, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
