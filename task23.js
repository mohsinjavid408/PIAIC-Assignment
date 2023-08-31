"use strict";
let x = 5;
let y = 10;
let z = "hello";
let arr = [1, 2, 3, 4, 5];
let obj = { name: "John", age: 30 };
// Test 1: Is x less than y? Prediction: true
console.log("Is x < y? Prediction: true.");
if (x < y) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 2: Is y less than x? Prediction: false
console.log("Is y < x? Prediction: false.");
if (y < x) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 3: Is z equal to "hello"? Prediction: true
console.log('Is z == "hello"? Prediction: true.');
if (z == "hello") {
    console.log(true);
}
else {
    console.log(false);
}
// Test 4: Is z equal to "world"? Prediction: false
console.log('Is z == "world"? Prediction: false.');
if (z == "world") {
    console.log(true);
}
else {
    console.log(false);
}
// Test 5: Is the length of arr greater than 3? Prediction: true
console.log("Is arr.length > 3? Prediction: true.");
if (arr.length > 3) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 6: Is the length of arr less than 2? Prediction: false
console.log("Is arr.length < 2? Prediction: false.");
if (arr.length < 2) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 7: Is obj's age greater than 25? Prediction: true
console.log("Is obj.age > 25? Prediction: true.");
if (obj.age > 25) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 8: Is obj's name equal to "Jane"? Prediction: false
console.log('Is obj.name == "Jane"? Prediction: false.');
if (obj.name == "Jane") {
    console.log(true);
}
else {
    console.log(false);
}
// Test 9: Is x equal to y? Prediction: false
console.log("Is x == y? Prediction: false.");
if (x == y) {
    console.log(true);
}
else {
    console.log(false);
}
// Test 10: Is y not equal to 10? Prediction: false
console.log("Is y != 10? Prediction: false.");
if (y != 10) {
    console.log(true);
}
else {
    console.log(false);
}
// Is x < y? Prediction: true.
// true
// Is y < x? Prediction: false.
// false
// Is z == "hello"? Prediction: true.
// true
// Is z == "world"? Prediction: false.
// false
// Is arr.length > 3? Prediction: true.
// true
// Is arr.length < 2? Prediction: false.
// false
// Is obj.age > 25? Prediction: true.
// true
// Is obj.name == "Jane"? Prediction: false.
// false
// Is x == y? Prediction: false.
// false
// Is y != 10? Prediction: false.
// false
