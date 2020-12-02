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
const coordinates: { x:number; y:number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue']
let foundWord_any;  //any type
let foundWord_inferred = false;  //type inferred
let foundWord_annotations: boolean; //type annotations

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord_any = true;
    foundWord_inferred = true;
    foundWord_annotations = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}
