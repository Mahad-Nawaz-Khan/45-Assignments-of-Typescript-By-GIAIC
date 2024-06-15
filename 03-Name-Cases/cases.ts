/* 3. Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let PersonName : string = "Asjad";

console.log(PersonName.toLowerCase());
console.log(PersonName.toUpperCase());
console.log(PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase());