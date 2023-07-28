// function greatestLetter(letters, target) {
//     let result;

//     for (let i = 0; i < letters.length; i++) {
//         let letter = letters[i];
//         if (letter > target) {
//         result = letter;
//         }
//     }

//     return result;
// }
  
// let letters = ['s', 'z', 'k'];
// let target = 'a';
// console.log(greatestLetter(letters, target));

// let letters2 = ['s', 'z', 'k', 'a'];
// let target2 = 'k';
// console.log(greatestLetter(letters2, target2));


// function objEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         return 'object is empty';
//     } else {
//         return 'object is not empty';
//     }
// }

// let obj1 = {};
// console.log(objEmpty(obj1));

// let obj2 = {
//     key: 'value',
// };
// console.log(objEmpty(obj2));





// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };

// for (let key in obj) {
//     if (obj[key] === null) {
//         delete obj[key];
//     }
// };

// console.log(obj);
  


// let obj = {
// 	key1: null,
// 	key2: 0,
// 	key3: 'string',
// };

// for (let key in obj) {
//     if (obj[key] === 0 || obj[key] === false || obj[key] === null || obj[key] === undefined || obj[key] === NaN || obj[key] === '') {
//         delete obj[key];
//     }
// };

// console.log(obj);