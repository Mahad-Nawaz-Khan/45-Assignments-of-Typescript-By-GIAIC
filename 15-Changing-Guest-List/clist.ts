/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

console.log("\n")

// Step 1: Initial Guest List and Invitations
let guests: string[] = ["Asjad", "Rab Nawaz", "Ajwad"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

// Step 2: Changing Guest List
let cantMakeIt: string = "Rab Nawaz";
console.log(`\nUnfortunately, ${cantMakeIt} can't make it to the dinner.`);

guests[guests.indexOf(cantMakeIt)] = "Ali";

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

