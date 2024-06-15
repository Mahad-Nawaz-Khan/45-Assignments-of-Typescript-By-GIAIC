/*45. Cars: Write a function that stores information about a car in a Object.
  The function should always receive a manufacturer and a model name.
  It should then accept an arbitrary number of keyword arguments.
  Call the function with the required information and two other name-value pairs,
  such as a color or an optional feature. Print the Object that’s returned
  to make sure all the information was stored correctly. */

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string,...options:[string, any][]): Car {
    const car : Car ={
        manufacturer: manufacturer,
        model: model
    };
    for (const [key , value] of options){
        car[key] = value; // pushes into car object
    }
    return car;
}

// Creating Cars
const car1 = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true]);
const car2 = createCar("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
const car3 = createCar("Ford", "Mustang", ["color", "black"], ["convertible", true], ["engine", "V8"]);

console.log(car1);
console.log(car2);
console.log(car3);