// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const { log } = require('console');
const fs = require('fs');

const write = fs.appendFileSync('a.txt',' appended data','utf-8');

console.log(write,' is appended to a.txt');
