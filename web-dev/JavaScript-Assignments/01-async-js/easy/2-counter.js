// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let count = 0;
function up(){
    count+=1;
console.log(count);
setTimeout(up,1000);
}
up();
