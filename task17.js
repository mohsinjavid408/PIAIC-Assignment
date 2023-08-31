"use strict";
let guestList2 = ["adil", "ali", "asim", "izaz", "osman", "zia"];
// Print a message about the limited space
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and I can only invite two people.");
// Remove guests from the list until only two names remain
while (guestList2.length > 2) {
    let removedGuest = guestList2.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}
// Print a message to each of the two remaining guests
for (let guest of guestList2) {
    let message = `Dear ${guest}, you are still invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]`;
    console.log(message);
}
// Remove the last two names from the list
guestList2.pop();
guestList2.pop();
// Print the updated guest list to make sure it's empty
console.log(guestList2);
// Unfortunately, the new dinner table won't arrive in time for the dinner, and I can only invite two people.
// Sorry zia, I can't invite you to dinner.
// Sorry osman, I can't invite you to dinner.
// Sorry izaz, I can't invite you to dinner.
// Sorry asim, I can't invite you to dinner.
// Dear adil, you are still invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear ali, you are still invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// []
