let GuestList: string[] = ["ali", "asim", "osman"];

// Print the name of the guest who can't make it
console.log(`${GuestList[1]} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
GuestList[1] = "khan";

// Print a second set of invitation messages
for (const guest of GuestList) {
  const message: string = `Dear ${guest}, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]`;
  console.log(message);
}

// asim can't make it to dinner.
// Dear ali, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear khan, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]
// Dear osman, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin Khan]