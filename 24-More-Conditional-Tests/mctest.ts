/*24. More Conditional Tests: You don’t have to limit the number
 of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let car = 'subaru';
let fruit = 'Apple';
let number = 10;
let temperature = 30;
let isRaining = false;
let fruits = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota');

console.log("Is car == 'Toyota'? I predict False.");
console.log(car == 'Toyota');

// Tests using the lower case function

console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');

console.log("Is fruit.toLowerCase() == 'Apple'? I predict False.");
console.log(fruit.toLowerCase() == 'Apple');

/* Numerical tests involving equality and inequality,
   greater than and less than, greater than or equal to,
   and less than or equal to */

console.log("Is number == 10? I predict True.");
console.log(number == 10); 

console.log("Is number != 10? I predict False.");
console.log(number != 10); 

console.log("Is number > 5? I predict True.");
console.log(number > 5); 

console.log("Is number < 5? I predict False.");
console.log(number < 5); 

console.log("Is temperature >= 30? I predict True.");
console.log(temperature >= 30);

console.log("Is temperature <= 25? I predict False.");
console.log(temperature <= 25);

// Tests using "and" and "or" operators

console.log("Is number > 5 and number < 15? I predict True.");
console.log(number > 5 && number < 15);

console.log("Is number > 15 or number < 15? I predict True.");
console.log(number > 15 || number < 15);

console.log("Is number > 15 and number < 5? I predict False.");
console.log(number > 15 && number < 5);

console.log("Is number > 15 or number < 5? I predict False.");
console.log(number > 15 || number < 5);

// Test whether an item is in an array

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple')); 
