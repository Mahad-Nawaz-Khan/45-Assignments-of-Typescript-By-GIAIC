/*29. Favorite Fruit: Make a array of your favorite fruits,
 and then write a series of independent if statements that
 check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

 let favorite_fruits: string[] = ["apple", "banana", "orange"];

 if (favorite_fruits.includes("apple")) {
   console.log("You really like apples!");
 }
 else if (favorite_fruits.includes("papaya")) {
   console.log("You really like papayas!");
 }
 else if (favorite_fruits.includes("pineapple")) {
   console.log("You really like pineapples!");
 }
 else if (favorite_fruits.includes("grape")) {
   console.log("You really like grapes!");
 }
 else if (favorite_fruits.includes("mango")) {
   console.log("You really like mangoes!");
 }