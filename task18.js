"use strict";
let placesToVisit = ["Japan", "Iceland", "New Zealand", "USA", "Egypt"];
// Print the original array
console.log("Original array:");
console.log(placesToVisit);
// Sort the array in alphabetical order and print the sorted array
let sortedArray = placesToVisit.slice().sort((a, b) => a.localeCompare(b));
console.log("Sorted array (alphabetical order):");
console.log(sortedArray);
// Print the original array again
console.log("Original array:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order and print the sorted array
let reverseSortedArray = placesToVisit.slice().sort((a, b) => b.localeCompare(a));
console.log("Sorted array (reverse alphabetical order):");
console.log(reverseSortedArray);
// Print the original array again
console.log("Original array:");
console.log(placesToVisit);
// Reverse the order of the array and print the reversed array
placesToVisit.reverse();
console.log("Reversed array:");
console.log(placesToVisit);
// Reverse the order of the array again and print the array to show it's back to its original order
placesToVisit.reverse();
console.log("Original array:");
console.log(placesToVisit);
// Sort the array in alphabetical order and print the sorted array
placesToVisit.sort((a, b) => a.localeCompare(b));
console.log("Sorted array (alphabetical order):");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order and print the sorted array
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted array (reverse alphabetical order):");
console.log(placesToVisit);
// Original array:
// [ 'Japan', 'Iceland', 'New Zealand', 'USA', 'Egypt' ]
// Sorted array (alphabetical order):
// [ 'Egypt', 'Iceland', 'Japan', 'New Zealand', 'USA' ]
// Original array:
// [ 'Japan', 'Iceland', 'New Zealand', 'USA', 'Egypt' ]
// Sorted array (reverse alphabetical order):
// [ 'USA', 'New Zealand', 'Japan', 'Iceland', 'Egypt' ]
// Original array:
// [ 'Japan', 'Iceland', 'New Zealand', 'USA', 'Egypt' ]
// Reversed array:
// [ 'Egypt', 'USA', 'New Zealand', 'Iceland', 'Japan' ]
// Original array:
// [ 'Japan', 'Iceland', 'New Zealand', 'USA', 'Egypt' ]
// Sorted array (alphabetical order):
// [ 'Egypt', 'Iceland', 'Japan', 'New Zealand', 'USA' ]
// Sorted array (reverse alphabetical order):
// [ 'USA', 'New Zealand', 'Japan', 'Iceland', 'Egypt' ]
