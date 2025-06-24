/**
 Write a script that prints the first argument passed to it:

If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use var
You are not allowed to use length
 */

const argument = process.argv.slice(2);
console.log(argument[0] === undefined ? "No argument" : argument[0]);