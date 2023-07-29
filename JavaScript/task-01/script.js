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


// 5. Write a JavaScript program to check if a string contains only digits.
// example: 1234567890  // true
// example: 1234567890a // false

function onlyDigits(str) {
  for (let i = 0; i < str.length; i++) {
     var ascii = str.charCodeAt(i);
     if (ascii < 48 || ascii > 57) {
        return false;
     }
  }
  return true;
}

var str1 = "1234567890";
console.log(onlyDigits(str1));

var str2 = "1234567890a";
console.log(onlyDigits(str2));


// 6. Write a JavaScript program to check if a string contains only digits and letters.
// example: 1234567890  // true
// example: 1234567890a // true
// example: 1234567890a!@#$%^&*()_+ // false

function onlyDigitsAndLetters(str) {
  for (let i = 0; i < str.length; i++) {
    var ascii = str.charCodeAt(i);
    if ((ascii < 48 || ascii > 122) || (ascii >= 58 && ascii <= 64) || (ascii >= 91 && ascii <= 96)) {
       return false;
    }
  }
  return true;
}

var str1 = "1234567890";
console.log(onlyDigitsAndLetters(str1));

var str2 = "1234567890a";
console.log(onlyDigitsAndLetters(str2));

var str3 = "1234567890a!@#$%^&*()_+";
console.log(onlyDigitsAndLetters(str3));


// 7. Write a JavaScript program to check if a string contains only uppercase letters.
// example: HELLO WORLD // true
// example: HELLO WORLD! // true
// example: HELLO WORLD!@#$%^&*()_+ // true
// example: HELLO WORLD!@#$%^&*()_+a // false

function onlyUppercaseLetters(str) {
  for (let i = 0; i < str.length; i++) {
    var ascii = str.charCodeAt(i);
    if (ascii >= 97 && ascii <= 122) {
       return false;
    }
  }
  return true;
}

var str1 = "HELLO WORLD!";
console.log(onlyUppercaseLetters(str1));

var str2 = "HELLO WORLD!@#$%^&*()_+";
console.log(onlyUppercaseLetters(str2));

var str3 = "HELLO WORLD!@#$%^&*()_+a";
console.log(onlyUppercaseLetters(str3));


// 8. Write a JavaScript program to UpperCase the first letter of each word of a given string without spaces.
// example: hello world
// output: HelloWorld

phrase = "hello world";
phrase = phrase.split(" ");

for (let i = 0; i < phrase.length; i++) {
  phrase[i] = phrase[i][0].toUpperCase() + phrase[i].substr(1);
}

console.log(phrase.join(""));


// 9. Write a JavaScript program to remove duplicate characters from a string.
// example: hello world
// output: helo wrd

let example5 = "hello world";
let result5 = '';
let charArr = [];

for (let i = 0; i < example5.length; i++) {
  let char = example5[i];

  if (!charArr.includes(char)) {
    result5 += char;
    charArr.push(char);
  };
};

console.log(result5);


// 10. Write a JavaScript program to convert a string into camel case.
// example: hello world
// output: helloWorld

phrase = "hello world";
phrase = phrase.split(" ");

for (let i = 0; i < phrase.length; i++) {
  phrase[i] = phrase[i][0].toUpperCase() + phrase[i].substr(1);
}

phrase[0] = phrase[0][0].toLowerCase() + phrase[0].substr(1);
console.log(phrase.join(""));


// 11. Write a JavaScript program to convert a string into snake case.
// example: hello world
// output: hello_world

var phrase = "hello world";
var result7 = '';

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === ' ') {
    result7 += '_';
  } else {
    result7 += phrase[i];
  }
}

console.log(result7);


// 12. Write a JavaScript program to convert a string into kebab case.
// example: hello world
// output: hello-world

var phrase = "hello world";
var result7 = '';

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === ' ') {
    result7 += '-';
  } else {
    result7 += phrase[i];
  }
}

console.log(result7);


// 13. Write a JavaScript program to check if a given string is a palindrome.
// palindromes: madam, civic, radar, level, rotor, kayak, reviver, racecar, redder, madam, refer
// example: hello world // false
// example: madam // true
// example: racecar // true

function isPalindrome(str) {
  var len = str.length;
  var middle = Math.floor(len / 2);

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

var str1 = "hello world";
console.log(isPalindrome(str1));

var str2 = "madam";
console.log(isPalindrome(str2));

var str3 = "racecar";
console.log(isPalindrome(str3));


// 14. Write a JavaScript program to check if a given string is a pangram.
// pangram: a sentence containing every letter in the English alphabet.
// example: The quick brown fox jumps over the lazy dog. // true
// example: The quick brown fox jumps over the dog. // false

function isPangram(str) {
  let alphaStr = 'abcdefghijklmnopqrstuvwxyz';

  for (let char of alphaStr) {
    if (!str.toLowerCase().includes(char)) {
      return false;
    }
  }

  return true;
}

var str1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(str1));

var str2 = "The quick brown fox jumps over the dog.";
console.log(isPangram(str2));


// 15. Write a JavaScript program to check if a given string is a anagram.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: cinema // iceman // true
// example: listen // silent // true
// example: hello // world // false

function isAnagram(str1, str2) {
  var sortedStrFirst = str1.toLowerCase().split('').sort().join('');
  var sortedStrSecond = str2.toLowerCase().split('').sort().join('');

  return sortedStrFirst === sortedStrSecond;
}

var str1 = "cinema";
var str2 = "iceman";
console.log(isAnagram(str1, str2))

var str3 = "listen";
var str4 = "silent";
console.log(isAnagram(str3, str4));

var str5 = "hello";
var str6 = "world";
console.log(isAnagram(str5, str6));
