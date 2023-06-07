// 1. Write program that will reverse string: `'Hello world' => 'dlrow olleH'`

let example = 'Hello world';
let result = '';
let len = example.length;

for (let i = 1; i <= len; i++) {
    result += example[len - i];
}

console.log(result);


// 2. Write program to repeat every character in string 3 times: `'Hello world!' => 'HHHeeellllllooo wwwooorrrlllddd!!!'`

example = 'Hello world!';
result = '';
len = example.length;

for (let i = 0; i < len; i++) {
    if (example[i] !== ' ') {
        result += example[i].repeat(3);
    } else {
        result += ' ';
    }
}

console.log(result);


// 3. Write program to repeat given string n times: `'Hello world', 3 => 'Hello worldHello worldHello world'`

example = 'Hello world';
result = '';

for (let i = 0; i < 3; i++) {
        result += example;
}

console.log(result);


// 4. Write program to find the first not repeated character: `'abacddbec' => 'e'`

function firstNonRepeatedChar(str) {
    let charCount = {};

    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character found, return null or an appropriate value
    return null;
}

example = 'abacddbec';
result = firstNonRepeatedChar(example);
console.log(result);


// 5. Write program to find the first repeated character: `'abacddbec' => 'a'`

function firstRepeatedChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (charCount[char]) {
            return char;
        }

        charCount[char] = true;
    }

    return null;
}

example = 'abacddbec';
result = firstRepeatedChar(example);
console.log(result);


// 6. Write program to find the count of each character: `'abacddbec' => {a: 2, b: 2, c: 2, d: 2, e: 1}`

example = 'abacddbec';
len = example.length;
let charCount = {};

for (let i = 0; i < len; i++) {
    let char = example[i];

    if (charCount[char]) {
        charCount[char] += 1;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);


// 7. Write program that truncates string in a given length: `'Hello world', 5 => 'Hello...'`

function truncateString(str, strLen) {
    let result1 = '';
    if (str.length <= strLen) {
        return str;
    } else { 
        for (let i = 0; i < strLen; i++) {
            result1 += str[i];
        }
        result1 += '...';
    }

    return result1;
}

example = 'Hello world';
strLen = 5;
console.log(truncateString(example, strLen));


// 8. Write program that truncates string in a given length, but it should not break the word: `'Hello world, nice talking to you', 20 => 'Hello world, nice...'`

function truncateString(str, strLen) {
    let result1 = '';
    let lastSpace = -1;

    if (str.length <= strLen) {
        return str;
    } else { 
        for (let i = 0; i < strLen; i++) {
            result1 += str[i];
            if (str[i] === ' ') {
                lastSpace = i;
            }
        }
    }

    if (lastSpace !== -1 && lastSpace < str.length - 1) {
        result1 = result1.slice(0, lastSpace);
    }

    result1 += '...';
    return result1;
}

example = 'Hello world, nice talking to you';
strLen = 20;
console.log(truncateString(example, strLen));


// 9. Create a program to calculate the sum of the elements in an array of numbers: `[1, 2, 3, 4, 5] => 15`

numArr = [1, 2, 3, 4, 5];
sum = 0;

for (let i of numArr) {
    sum += i;
}

console.log(sum);


// 10. Create a program to calculate the average of the elements in an array of numbers: `[1, 2, 3, 4, 5] => 3`

numArr = [1, 2, 3, 4, 5];
sum = 0;
count = 0;

for (let i of numArr) {
    sum += i;
    count += 1;
}

console.log(sum / count);


// 11. Create a program to find the maximum number in an array of numbers: `[1, 2, 3, 4, 5] => 5`

numArr = [1, 2, 3, 4, 5];
max = -Infinity;

for (let i of numArr) {
    if (max < i) {
        max = i;
    }
}

console.log(max);


// 12. Create a program to find the minimum number in an array of numbers: `[1, 2, 3, 4, 5] => 1`

numArr = [1, 2, 3, 4, 5];
min = Infinity;

for (let i of numArr) {
    if (min > i) {
        min = i;
    }
}

console.log(min);


// 13. Create a program to find the second largest number in an array of numbers: `[1, 2, 3, 4, 5] => 4`

numArr = [1, 2, 3, 4, 5];
len = numArr.length;
max = -Infinity;
secMax = -Infinity;

for (let i = 0; i < len; i++) {
    if (max < numArr[i]) {
        secMax = max;
        max = numArr[i];
    } else if (numArr[i] > secMax && numArr[i] !== max) {
        secMax = numArr[i];
    }
}

console.log(secMax);


// 14. Create a program to find the second smallest number in an array of numbers: `[1, 2, 3, 4, 5] => 2`

numArr = [1, 2, 3, 4, 5];
len = numArr.length;
min = Infinity;
secMin = Infinity;

for (let i = 0; i < len; i++) {
    if (numArr[i] < min) {
        secMin = min;
        min = numArr[i];
    } else if (numArr[i] < secMin && numArr[i] !== min) {
        secMin = numArr[i];
    }
}

console.log(secMin);



// 15. Create a program to find the count of each element in an array of numbers: `[1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}`

example = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
len = example.length;
charCount = {};

for (let i = 0; i < len; i++) {
    let char = example[i];

    if (charCount[char]) {
        charCount[char] += 1;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);


// 16. Create a program to find the sum of the odd numbers in an array of numbers: `[1, 2, 3, 4, 5] => 9`

numArr = [1, 2, 3, 4, 5];
sum = 0;

for (let i of numArr) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);


// 17. Create a program to find the sum of the even numbers in an array of numbers: `[1, 2, 3, 4, 5] => 6`

numArr = [1, 2, 3, 4, 5];
sum = 0;

for (let i of numArr) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);

