/* 16. More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end
  of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// Step 1: Initial Guest List and Invitations
let guests: string[] = ["Asjad", "Rab Nawaz", "Ajwad"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

// Step 2: Changing Guest List
let cantMakeIt: string = "Rab Nawaz";
console.log(`\nUnfortunately, ${cantMakeIt} can't make it to the dinner.\n`);

guests[guests.indexOf(cantMakeIt)] = "Ali";

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

// Step 3: More Guests
console.log("\nGood news! We found a bigger dinner table, so we have more space for more guests.\n");

guests.unshift("Raheel");
guests.splice(Math.floor(guests.length / 2), 0, "Wakeel");
guests.push("Jahangir");

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

