// JavaScript Tasks on Array

// 1. Check if input is array or not

// let variable1 = [];
// let variable2 = { length: 1 };
// let variable3 = new Array(1);

// console.log(Array.isArray(variable1));
// console.log(Array.isArray(variable2));
// console.log(Array.isArray(variable3));


// 2. Clone Array

// let array1 = [1, 2, 3];
// let array2 = copy(array1);
// console.log(array1 === array2);
// console.log(array1[0] === array2[0]);

// function copy(array) {
//   return [...array];
// }


// 3. Deep clone array using recursive function

// let array1 = [{ name: 'John' }];
// let array2 = deepCopy(array1);
// console.log(array1 === array2);
// console.log(array1[0] === array2[0]);

// function deepCopy(array) {
//   let deepClonedArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let element = array[i];

//     if (typeof element === 'object' && element !== null) {
//       deepClonedArray.push(deepCopy(element));
//     } else {
//       deepClonedArray.push(element);
//     }
//   }

//   return deepClonedArray;
// }


// 4. Sort given number array like max, min, max, min...

// let array = [1, -4, 5, 6, -2, 0];
// let sortedArr = sortArrayMinMax(array);
// console.log(sortedArr);

// function sortArrayMinMax(array) {
//   array.sort((a, b) => a - b);

//   let left = 0;
//   let right = array.length - 1;

//   let sorted = [];

//   while (left <= right) {
//     sorted.push(array[right]);
//     right--;
    
//     sorted.push(array[left]);
//     left++;
//   }

//   return sorted;
// }


// 5. Create a function to create array from given parameters

// function range(start = 1, stop = 10, step = 1) {
//     let arr = [];
//     for (let i = start; i < stop; i += step) {
//       arr.push(i);
//     }
//     return arr;
//   }
  
// console.log(range(7));
// console.log(range(2020, 2023));
  

// 6. Create a function to calculate sum of all numbers in a given array or parameters list

// function sum(array) {
//     let sumOfArray = 0;
//     let newArray = [];

//     if (Array.isArray(array)) {
//         newArray = array;
//     } else {
//         newArray = Array.from(arguments);
//     }

//     for (let i = 0; i < newArray.length; i++) {
//         if (typeof newArray[i] === 'number' && !isNaN(newArray[i])) {
//             sumOfArray += newArray[i];
//         }
//     }
  
//     return sumOfArray;
// }
  
// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 'hello', true]));
// console.log(sum(1, 2, 3));
  

// 7. Create a function called random to get random integer between min and max

// function random(min = -2147483648, max = 2147483647) {
//     if (min === -Infinity && max === Infinity) {
//       return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
//     } else {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }
  
// console.log(random(1, 5));
// console.log(random(-Infinity, Infinity));


// 8. Create a function called round

// function round(num, precision = 2) {
//     return num.toFixed(precision);
// }

// console.log(round(2.1425));
// console.log(round(2.1425, 3));


// 9. Create a function called arithmeticMean

// function arithmeticMean(numbers) {
//     let sum = 0;
//     let count = numbers.length;
//     for (let i of numbers) {
//         sum += i;
//     }

//     return sum / count;
// }

// console.log(arithmeticMean([1, 2, 3, 4, 5]));
// console.log(arithmeticMean([1, 5]));
// console.log(arithmeticMean([3, 3, 3, 3]));


// 10. Create a function called geometricMean, which calculates arithmetic mean, and returns rounded value

// function geometricMean(numbers) {
//     let product = 1;
//     let count = numbers.length;
//     for (let i of numbers) {
//         product *= i;
//     }

//     return round ((product ** (1 / count)), 2);
// }

// function round(num, precision = 2) {
//     return num.toFixed(precision);
// }

// console.log(geometricMean([1, 2, 3, 4, 5]));
// console.log(geometricMean([1, 5]));
// console.log(geometricMean([5, 5, 5]));


// 11. Create a function called unique

// function unique(array) {
//     let newArray = [];
//     for (let i of array) {
//         if (!newArray.includes(i)) {
//             newArray.push(i)
//         }
//     }
//     return newArray;
// }

// console.log(unique([1, 1, 1, 5]));
// console.log(unique([5, 5, 5]));
// console.log(unique([1]));
    

// 12. Create a function called naturalSum, it should be recursive function

// function naturalSum(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n + naturalSum(n - 1);
//     }
// }

// console.log(naturalSum(3));
// console.log(naturalSum(6));
// console.log(naturalSum(9));


// 13. Make a function called flat to falt array of any nested arrays

// function flat(array) {
//     let flatArr = [];
  
//     function flatNestedArr(arr) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flatNestedArr(arr[i]);
//         } else {
//             flatArr.push(arr[i]);
//         }
//       }
//     }
  
//     flatNestedArr(array);
//     return flatArr;
// }

// console.log(flat([1, 2, [3, 4]]));
// console.log(flat([1, 2, [3, 4, [5, 6]]]));
// console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));


// 14. Extend previous function to accept nesting level

// function flat(array, givenLevel = Infinity) {
//     let flatArr = [];
  
//     function flatNestedArr(arr, actualLevel) {
//       for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]) && actualLevel < givenLevel) {
//             flatNestedArr(arr[i], actualLevel + 1);
//         } else {
//             flatArr.push(arr[i]);
//         }
//       }
//     }
  
//     flatNestedArr(array, 0);
//     return flatArr;
// }

// console.log(flat([1, 2, [3, 4, [5, 6]]], 1));
// console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2));


// 15. Make a function called collectString to collect all strings from nested keys

// function collectStrings(deepObject) {
//     let strings = [];

//     function extractStrings(obj) {
//         for (let key in obj) {
//             if (typeof obj[key] === "string") {
//                 strings.push(obj[key]);
//             } else if (typeof obj[key] === "object" && obj[key] !== null) {
//                 extractStrings(obj[key]);
//             }
//         }
//     }

//     extractStrings(deepObject);
//     return strings;
// }
  
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     },
//                 },
//             },
//         },
//     },
// };

// console.log(collectStrings(obj));


// 16. Make random password generator functions

// const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
// generator1(5); // "@Za9💕"
// generator1(9); // "Cx$0 9💣kA"
// const generator2 = passwordGenerator(['9']);
// generator2(4); // "3277"
// generator2(5); // "034109"


// 17. Make ceaserCipherGenerator and ceaserCipher functions

// const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');

// ceaserCipher('Hello', 4); // Olssv
// ceaserCipher('If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.', 7); // Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.


// 18. Make diff function to find difference between objects

// function diff(arg1, arg2) {
//     if (typeof arg1 === 'object' && typeof arg2 === 'object') {
//         // find difference
//     } else if (Array.isArray(arg1) && Array.isArray(arg2)) {
//         let newArray = [];
    
//         for (let i = 0; i < arg2.length; i++) {
//           if (!arg1.includes(arg2[i])) {
//             newArray.push(arg2[i]);
//           }
//         }
//         return newArray;
//       } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//         return arg2.slice(arg1.length);
//       } else {
//         return arg1 - arg2;
//       }
//   }
  
// console.log(diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 }));
// console.log(diff([1, 2, 3], [1, 2, 3, 4, 5]));
// console.log(diff('john', 'johnathan'));
// console.log(diff(5, 6));
  

// 19. Find missing number in the array

// function missingNum(array) {
//     let expectedSum = 0;
//     let actualSum = 0;
  
//     for (let i = 1; i <= array.length + 1; i++) {
//       expectedSum += i;
//     }
//     for (let i = 0; i < array.length; i++) {
//       actualSum += array[i];
//     }
  
//     let missingNum = expectedSum - actualSum;
//     return missingNum;
// }
  
// const array1 = [1, 5, 4, 2];
// const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

// console.log(missingNum(array1));
// console.log(missingNum(array2));
  

// 20. Find distance, elevation and angle between given coordinates

//     const distance = Math.sqrt(Math.pow(coord2.X - coord1.X, 2) + Math.pow(coord2.Y - coord1.Y, 2));
//     const elevation = coord2.Z - coord1.Z;
//     const angle = Math.atan2(coord2.Y - coord1.Y, coord2.X - coord1.X) * (180 / Math.PI);
  
//     return {
//       distance: Math.round(distance),
//       elevation: Math.round(elevation),
//       angle: Math.round(angle),
//     };
// }
  
// // Coordinates:
// const coord1 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
// };
// const coord2 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
// };

// const coord3 = {
//     X: 5573283,
//     Y: 6309750,
//     Z: 191.5,
// };
// const coord4 = {
//     X: 5573791,
//     Y: 6323798,
//     Z: 132.2,
// };

// console.log(calculateDistance(coord1, coord2)); // { distance: 14057, elevation: -59, angle: 88 }
// console.log(calculateDistance(coord3, coord4)); // { distance: 19457, elevation: 419, angle: -134 }


