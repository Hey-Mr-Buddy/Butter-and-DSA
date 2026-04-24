// Butter and DSA - leetcode problem 2667.
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


// Solution:
/**
 * @return {Function}
 */
var createHelloWorld = () => (...args) => "Hello World";

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


//Concepts Tackled:
/**
 * Basic Function Syntax
 * Anonymous Functions
 * Immediately Invoked Function Expression (IIFE)
 * Function Hoisting  // You can only do this if you declare functions with the function syntax.
 * Arrow Syntax for functions declaration
 * Rest arguments
 * Higher Order Functions  // a function that accepts a function and/or returns a function.
 */