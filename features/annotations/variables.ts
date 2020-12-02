let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumber: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

//Class
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x:number; y:number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i:number) => void = (i:number) => {
  console.log(i)
};

// When to annotations
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);