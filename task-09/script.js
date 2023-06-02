// 1. Write a JavaScript program to display numbers as words using ASCII code.
// example: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
// output: hello world

let example = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
let result = '';

for (let i of example) {
  result += String.fromCharCode(i);
}

console.log(result);


// 2. Write a JavaScript program to convert a string to an array of ASCII codes.
// example: hello world
// output: [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

let example2 = "hello world";
let result2 = [];

for(let i = 0; i < example2.length; i++){
    let res = example2.charCodeAt(i);
    result2.push(res);
}

console.log(result2);


// 3. Write a JavaScript program to convert a string to an array of characters.
// example: "hello world"
// output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

example3 = "hello world";
let result3 = [];

for(let i of example3){
    result3.push(i);
}

console.log(result3);


// 4. Write a JavaScript program to drop the vowels from a string.
// example: hello world
// output: hll wrld

let example4 = "hello world";
let result4 = '';

for (let i of example4) {
  if (i != 'e' && i != 'a' && i != 'i' && i != 'o' && i != 'u') {
    result4 += i;
  }
}

console.log(result4);




