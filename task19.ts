let guestList3 = ["adil", "ali", "asim", "izaz", "osman", "zia"];

// Print the number of people you are inviting to dinner
console.log(`You are inviting ${guestList3.length} people to dinner.`);

// Print a personalized invitation message to each person in the guest list
for (const guest of guestList3) {
  const message: string = `Dear ${guest}, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]`;
  console.log(message);
}

// You are inviting 6 people to dinner.
// Dear adil, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]
// Dear ali, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]
// Dear asim, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]
// Dear izaz, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]
// Dear osman, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]
// Dear zia, you are cordially invited to dinner at my place on Saturday evening. Please let me know if you can make it. Sincerely, [Mohsin khan]