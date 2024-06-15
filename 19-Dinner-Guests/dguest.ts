/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner. */

let guests: string[] = ["Asjad", "Rab Nawaz", "Ajwad"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

console.log(`There are ${guests.length} guests are invited to dinner`);