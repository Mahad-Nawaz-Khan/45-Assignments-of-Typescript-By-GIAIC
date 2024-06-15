/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner. */
var guests = ["Asjad", "Rab Nawaz", "Ajwad"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
console.log("There are ".concat(guests.length, " guests are invited to dinner"));
