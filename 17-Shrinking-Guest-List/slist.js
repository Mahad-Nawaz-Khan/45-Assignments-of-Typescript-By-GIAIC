/* 17. Shrinking Guest List: You just found out that your new dinner table
won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints
a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names
  remain in your list. Each time you pop a name from your list,
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list,
  letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
  Print your list to make sure you actually have an empty list at the end of your program.*/
// Step 1: Initial Guest List and Invitations
var guests = ["Asjad", "Rab Nawaz", "Ajwad"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
// Step 2: Changing Guest List
var cantMakeIt = "Rab Nawaz";
console.log("\nUnfortunately, ".concat(cantMakeIt, " can't make it to the dinner.\n"));
guests[guests.indexOf(cantMakeIt)] = "Ali";
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
// Step 3: More Guests
console.log("\nGood news! We found a bigger dinner table, so we have more space for more guests.\n");
guests.unshift("Raheel");
guests.splice(Math.floor(guests.length / 2), 0, "Wakeel");
guests.push("Jahangir");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
// Step 4: Shrinking Guest List
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.\n");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
console.log("");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.pop();
guests.pop();
console.log("\nCurrent guest list:", guests);
