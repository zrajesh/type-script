let greetings: string = "Hello TypeScript";

console.log(greetings);

// Number
let productId: number = 3346;

// Type inference

// In TypeScript, it is not necessary to annotate type always. 
// The TypeScript compiler infers the type information when there is 
// no explicit information available in the form of type annotations.  
// In TypeScript, TypeScript compiler infers the type information when:  
// Variables and members are initialized 
// Setting default values for parameters 
// Determined function return types
let userId = 3346;
// The userId variable is automatically infered to number hence cannot assign
// other types.
// userId = "Hello";

// It is going to log "Hello" wihtout error because TypeScript is just use for
// type safety in the development environment. Later in the browser it is going
// to compile down to JavaScript.
console.log(userId); 
// The hero variable is automatically infered as any
let hero;
// TypeScript also has a special type, any, that you can use whenever you don’t 
// want a particular value to cause typechecking errors. Any type is used when 
// we deal with third-party programs and expect any variable but we don’t 
// know the exact type of variable. It allows us to assign any tpye of value 
// whether it might be string, number, boolean, etc.
// You usually want to avoid this, though, because any isn’t type-checked.

// Boolean
let isLoggedIn = false;



export {}
