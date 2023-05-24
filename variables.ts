// primitive types
let digit: number = 5;
let apple: string = 'Fuji Apples';
let hasName: boolean = true;
let nothing: undefined = undefined;
let noValue: null = null;

// built in objects
let time: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'yellow'];
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
let truthTables: boolean[] = [true, false, false, true];

// Classes
class Car {
  speed: number;
  color: string;
}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Any type
// Avoid any type at all costs
const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// Type annotations vs Type Inference: only when
// 1. when a function returns 'any' type - like JSON.parse() -> return different value type
// 2.declare not the same time
// 3.a variable has a type that cannot be inferred
let numberAboveZero: boolean | number;

// Documentation:
// TypeScript is JavaScript’s runtime with a compile-time type checker.
