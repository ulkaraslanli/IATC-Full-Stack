// 1.
// Create an object named "person" with properties: name, age, and occupation.
// Add a method to the object that returns the person's full name.

const person = {
    name: "John Doe",
    age: 25,
    occupation: "Backend Developer",
    fullName() {
      return this.name;
    }
  };
  
console.log(person.fullName());
  

// 2.
// Create an object named "math" with properties: PI, E, SQRT2, and random.
// Use the math object to log a random number between 0 and 1 to the console.

const math = {
    PI: Math.PI,
    E: Math.E,
    SQRT2: Math.SQRT2,
    random: Math.random()
  };
  
console.log(math.random);
  

// 3.
// Create a string variable and store your full name in it.
// Use the string method to convert the string to uppercase.

let myName = 'Ulkar Aslanli';
console.log(myName.toUpperCase());


// 4.
// Create a variable and assign it a number.
// Use the Math object to round the number to the nearest integer.

let number = 13.567;
console.log(Math.round(number));


// 5.
// Create a variable and assign it a large number using BigInt.
// Perform a mathematical operation (e.g., addition) on the BigInt number.

const largeNumber = BigInt("12345678901234567890");
console.log(largeNumber + BigInt(3));


// 6.
// Create a new Date object and store the current date and time.
// Use the Date object methods to get the current month and year.

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

console.log(currentDate);
console.log(currentMonth);
console.log(currentYear);


// 7.
// Use the Math object to generate a random number between 1 and 10.
// Calculate the square root of a given number using the Math object.

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const num = 625;
console.log(Math.sqrt(num));


// 8.
// Create an object named "car" with properties: make, model, and year.
// Add a method to the object that returns the car's full description.

const car = {
    make: 'steel',
    model: 'BMW',
    year: 2020,
    fullCarDesription() {
      return this.model + ' car which was made with ' + this.make + ' in ' + this.year;
    }
  };
  
console.log(car.fullCarDesription());


// 9.
// Create a string variable and store a sentence in it.
// Use the string method to check if the sentence contains a specific word.

const sentence = 'You need to learn multiple technologies to be successful in this field.';
const word = 'successful';
if (sentence.includes(word)) {
    console.log('Sentence contains the given word.');
} else {
    console.log('Sentence does not contain the given word.');
}


// 10.
// Create a variable and assign it a negative number.
// Use the Math object to get the absolute value of the number.

const negativeNumber = -345;
console.log(Math.abs(negativeNumber));


// 11.
// Create two Date objects representing different dates.
// Use the Date object methods to calculate the difference between the two dates in days.

const dateFirst = new Date(2023, 06, 01);
const dateSecond = new Date(2023, 06, 16);

const days = Math.ceil((dateSecond - dateFirst) / (1000 * 60 * 60 * 24));
console.log(days);


// 12.
// Make an object named "date"
// Add properties: day, month, year
//   day:   1-31        => default: today
//   month: 1-12        => default: today
//   year:  1970-2023   => default: today
// Add methods: getDay, getMonth, getYear
// Add methods: setDay, setMonth, setYear
// Add method: getFullDate (returns full date in format: DD.MM.YYYY using day, month, year)
// Add method: setFullDate (parameter full date in format: DD.MM.YYYY, sets day, month, year)
// Add method: toString (returns full date in format: DD.MM.YYYY)

const date = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),

    getDay() {
        return this.day;
    },
    getMonth() {
        return this.month;
    },
    getYear() {
        return this.year;
    },
    
    setDay(newSettedDay) {
        if (newSettedDay >= 1 && newSettedDay <= 31) {
            date.day = newSettedDay;
        }
    },
    setMonth(newSettedMonth) {
        if (newSettedMonth >= 1 && newSettedMonth <= 12) {
            date.month = newSettedMonth;
        }
    },
    setYear(newSettedYear) {
        if (newSettedYear >= 1970 && newSettedYear <= 2023) {
            date.year = newSettedYear;
        }
    },
        
    getFullDate() {
        const dd = String(this.day).padStart(2, '0');
        const mm = String(this.month).padStart(2, '0');
        const yy = String(this.year);

        return `${dd}.${mm}.${yy}`;
    },

    toString() {
        return this.getFullDate();
    }
}
    
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getYear());
date.setDay(16);
date.setMonth(6);
date.setYear(2023);
console.log(date.getFullDate());
console.log(date.toString());


// 13.
// Make an object named "math"
// Add properties: PI, E, SQRT2
// Add methods: random (returns random number between 0 and 1)

const math2 = {
    PI: Math.PI,
    E: Math.E,
    SQRT2: Math.SQRT2,
    findRandomNumber() {
        return Math.random();
    }
  };
  
console.log(math2.findRandomNumber());


// 14.
// create 5 objects with properties: title, count, price
// ex: const product1 = { title: 'Pen', count: 1, price: 2 };
// create an array named "products" and add 5 objects to it
// create an object named "cart" with property "products" (empty array)
// add methods: addToCart, removeFromCart, getTotalPrice, getTotalCount
// cart.addToCart(product1); returns: total count of products in cart
// you can add same product maximum `product.count` times
// cart.getTotalCount(); returns: 2
// cart.getTotalPrice(); returns: total price of all products in cart

const product1 = { title: 'Pen', count: 1, price: 2 };
const product2 = { title: 'Pencil', count: 2, price: 4 };
const product3 = { title: 'Book', count: 3, price: 6 };
const product4 = { title: 'Notebook', count: 5, price: 1 };
const product5 = { title: 'Eraser', count: 4, price: 2 };

const products = [product1, product2, product3, product4, product5];

const cart = {
    products: [],
    
    addToCart(product) {
        cart.products.push(product);
        return cart.products;
    },

    removeFromCart(product) {
        cart.products.pop(product);
        return cart.products;
    },

    getTotalCount() {
        return cart.products.length;
    },

    getTotalPrice() {
        let totalPrice = 0;
        for (const product of this.products) {
            totalPrice += product.count * product.price;
        }
        return totalPrice;
    }
};

console.log(cart.addToCart(product1));
console.log(cart.addToCart(product3));
console.log(cart.removeFromCart(product1));
console.log(cart.getTotalCount());
console.log(cart.getTotalPrice());

