/* 18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/ 

// Step 1: Store the locations in an array (not in alphabetical order)
let places: string[] = ["Kashmir", "Tokyo", "Venice", "Lahore", "Islamabad"];

// Step 2: Print the array in its original order
console.log("Original order:", places);

// Step 3: Print the array in alphabetical order without modifying the actual list
let placesAlphabetical = [...places].sort();
console.log("Alphabetical order:", placesAlphabetical);

// Step 4: Show that the array is still in its original order by printing it
console.log("Original order (unchanged):", places);

// Step 5: Print the array in reverse alphabetical order without changing the order of the original list
let placesReverseAlphabetical = [...places].sort().reverse();
console.log("Reverse alphabetical order:", placesReverseAlphabetical);

// Step 6: Show that the array is still in its original order by printing it again
console.log("Original order (unchanged):", places);

// Step 7: Reverse the order of your list and print the array
places.reverse();
console.log("Reversed order:", places);

// Step 8: Reverse the order of your list again and print the list
places.reverse();
console.log("Back to original order:", places);

// Step 9: Sort your array so it’s stored in alphabetical order and print the array
places.sort();
console.log("Sorted in alphabetical order:", places);

// Step 10: Sort to change your array so it’s stored in reverse alphabetical order and print the list
places.sort().reverse();
console.log("Sorted in reverse alphabetical order:", places);
