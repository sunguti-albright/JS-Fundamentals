/*
Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

If the argument can’t be converted to an integer, print “Not a number”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use try/catch */


const arg = process.argv[2];   // always a string from CLI
const num = Number(arg);       // try to convert

if (!Number.isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}



// const argu = process.argv[2];      // first argument
// const numb = Number(arg);          // convert to number (strict)

// if (Number.isNaN(numb)) {
//   console.log("Not a number");
// } else {
//   console.log("My number: " + numb);
// }


// const args = process.argv[2];          // first argument
// const nums = parseInt(arg, 10);        // convert to integer (base 10)

// if (isNaN(nums)) {
//   console.log("Not a number");
// } else {
//   console.log("My number: " + nums);
// }
