/*45. Cars: Write a function that stores information about a car in a Object.
  The function should always receive a manufacturer and a model name.
  It should then accept an arbitrary number of keyword arguments.
  Call the function with the required information and two other name-value pairs,
  such as a color or an optional feature. Print the Object that’s returned
  to make sure all the information was stored correctly. */
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value; // pushes into car object
    }
    return car;
}
// Creating Cars
var car1 = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true]);
var car2 = createCar("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
var car3 = createCar("Ford", "Mustang", ["color", "black"], ["convertible", true], ["engine", "V8"]);
console.log(car1);
console.log(car2);
console.log(car3);
