/* 21. They think of something you could store in a TypeScript Object.
   Write a program that creates Objects containing these items. */
var countrieslist = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Brazil", "India", "China"];
console.log(countrieslist);
var countryData = [
    { name: "United States", capital: "Washington, D.C.", population: 331000000, area: 9833520 },
    { name: "Canada", capital: "Ottawa", population: 38000000, area: 9984670 },
    { name: "United Kingdom", capital: "London", population: 67220000, area: 243610 },
    { name: "Germany", capital: "Berlin", population: 83240000, area: 357022 },
    { name: "France", capital: "Paris", population: 67390000, area: 551695 },
    { name: "Japan", capital: "Tokyo", population: 125800000, area: 377975 },
    { name: "Australia", capital: "Canberra", population: 25690000, area: 7692024 },
    { name: "Brazil", capital: "Brasília", population: 213300000, area: 8515767 },
    { name: "India", capital: "New Delhi", population: 1393409038, area: 3287263 },
    { name: "China", capital: "Beijing", population: 1444216107, area: 9596961 }
];
var countries = countryData.map(function (data) { return ({
    Country: data.name,
    Capital: data.capital,
    Population: data.population,
    Area: data.area
}); });
countries.forEach(function (country) { return console.log(country); });
