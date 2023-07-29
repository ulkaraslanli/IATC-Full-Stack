// 1. Make a constructor function. Check it with instanceof operator

// class User {
//     constructor(fname, age) {
//         console.log(this);
//         this.fname = fname;
//         this.age = age;
//     }
// }

// const user = new User('Smith', 40);

// console.log('user instanceof User', user instanceof User); // true
  

// 2. Write two functions, one for constructing User, other for Employee. Employee instance should be instance of User too

// class User {
//     constructor(fname, age) {
//         console.log(this);
//         this.fname = fname;
//         this.age = age;
//     }
// }

// class Employee extends User {
//     constructor(fname, age, position) {
//         super(fname, age);
//         this.position = position;
//     }
// }

// const e = new Employee('Smith', 55, 'SMM');

// console.log('e instanceof Employee', e instanceof Employee); // true
// console.log('e instanceof User', e instanceof User); // true


// 3. Make function, which can create a new object with new keyword. But object should be instance of another object

// class User {
//     constructor(fname, age) {
//         console.log(this);
//         this.fname = fname;
//         this.age = age;
//     }
// }

// class Weirdo {
//     constructor(position) {
//         this.position = position;
//     }
// }

// const weirdo = new Weirdo('manager');

// console.log('weirdo instanceof Weirdo', weirdo instanceof Weirdo); // true
// console.log('weirdo instanceof User', weirdo instanceof User); // false


// 4. Use generator function to generate 'count' numbers from 'start'

// function* rangeGenerator(start, count, step = 1) {
//     for (let i = 0; i < count; i++) {
//         yield start + i * step;
//     }
// }

// function range(start = 0, count = 10, step = 1) {
//     return Array.from(rangeGenerator(start, count, step));
// }

// console.log(range());          // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(range(1));         // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(2020, 3));   // [2020, 2021, 2022]


// 5. Make a function to return array of last 3 years: {years: month[]} or {years: quarters[]} or years[]

// function lastThreeYears(date, mode = 'year') {
//     const currentYear = date.getFullYear();
//     const result = {};
  
//     for (let i = 0; i < 3; i++) {
//       const year = currentYear - i;
//       const yearData = [];
  
//       if (mode === 'month') {
//         for (let month = 0; month < 12; month++) {
//           if (year === currentYear && month > date.getMonth()) {
//             break;
//           }
//           yearData.push(month);
//         }
//       } else if (mode === 'quarter') {
//             for (let quarter = 1; quarter <= 4; quarter++) {
//                 if (year === currentYear && quarter > Math.ceil((date.getMonth() + 1) / 3)) {
//                     break;
//                 }
//                 yearData.push(quarter);
//             }
//       }
  
//       result[year] = yearData;
//     }

//     if (mode === 'year') {
//         return Object.keys(result).map(Number);
//     } else {
//         return result;
//     }
  
//   }
  
//   const date = new Date(2023, 5, 30);
  
//   console.log(lastThreeYears(date));          
//   console.log(lastThreeYears(date, 'year'));
//   console.log(lastThreeYears(date, 'month'));
//   console.log(lastThreeYears(date, 'quarter'));


// 6. What will we see in console

//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     });
//   }).then(() => {
//     console.log('promise');
//   });

//   setTimeout(() => {
//     console.log('timeout');
//   });

//   console.log('hello');

//   requestIdleCallback(() => {
//     console.log('requestIdleCallback');
//   });

// hello
// promise
// timeout 
// requestIdleCallback


// 7. What will we see in console

// setTimeout(() => console.log('timeout 1'));

// Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

// Promise.resolve().then(() => console.log('promise 1'));

// Promise.resolve().then(() => console.log('promise 2'));

// setTimeout(() => console.log('timeout 3'))

// promise 1
// promise 2
// timeout 1
// timeout 3
// timeout 2


// 8. What will we see in console

// globalThis.name = 'foo';

// function log(name) {
//     new Function('\tconsole.log(name);')();
// }

// log('bar');

// foo


// 9. What will we see in console

// const obj = {
//     name: 'foo',
//     log: function () {
//         console.log(this.name);
//     },
// };

// const log = obj.log;

// log();

// foo


// 10. Write this function to make it work

// const person = {
//     name: 'foo',
//     age: 20,
//     [Symbol.toPrimitive](hint) {
//       if (hint === 'number') {
//         return this.age;
//       }
//       if (hint === 'string' || hint === 'default') {
//         return this.name;
//       }
//       throw new TypeError(`Conversion to ${hint} is not supported.`);
//     },
// };
  
// console.log(Number(person) + 10); // 30
// console.log(`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`); // 'foo is adult'
  