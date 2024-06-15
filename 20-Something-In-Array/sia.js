/* 20. Think of something you could store in a array.
   For example, you could make a list of mountains, rivers,
   countries, cities, languages, or anything else you’d like.
   Write a program that creates a list containing these items.*/
// Define an array of countries
var countries = ["United States", "Canada", "United Kingdom",
    "Germany", "France", "Japan", "Australia",
    "Brazil", "India", "China"];
// Print the list of countries
console.log("\nList of countries:\n");
countries.forEach(function (country, index) {
    console.log(index + 1, country);
});
