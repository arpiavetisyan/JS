// // 1. Given a positive integer. Bring the last digit of the number to the beginning.  
// // Print the new number. If the last digit of the inserted number is 0, the 
// // number remains the same.

// let a = 367; // 1002 250 8
// let b = a % 10;
// let c = parseInt(a / 10)
// let d = +`${b}${c}`

// if (b > 0 && c !== 0) {
//     console.log(d)
// } else {
//     console.log(a)
// }

// // 2. Given the following code. Rewrite it using only two if operators. (Hint: use logical operators).

// var n = +prompt();

// var i = 0;
// var j = 0;

// if (n % 2 === 0 && !Math.floor(n / 10)) {
//     i += 1;
// }

// if (n % 3 === 0 && n % 10 === 0) {
//     j += 1
// }

// //  3. Given a number. Find the difference between its biggest and smallest digits.

// var number = 4593653;

// var max = 0;
// var min = number % 10;

// while (number > 0) {
//     var currentDigit = number % 10;
//     max = Math.max(currentDigit, max);
//     min = Math.min(currentDigit, min);
//     number = Math.floor(number / 10);
// }

// // 4. Input three numbers a, b, c respectively, where a is nonzero 
// // number and write a program to solve quadratic equations: ax2 + bx +c = 0.
// // (Hint: use Math.pow or Math.sqrt)

// let a = 5;
// let b = -13;
// let c = 6;
// let d = Math.pow(b, 2) - 4 * a * c;
// let x1 = (-b + Math.sqrt(d)) / (2 * a)
// let x2 = (-b - Math.sqrt(d)) / (2 * a)

// if (a === 0) {
//     alert(`Enter valid constants`)
// } else if (d < 0) {
//     alert(`Solution does not exists`)
// } else if (d === 0) {
//     alert(`The solution is ${x1}`)
// } else {
//     alert(`The solution is ${x1} and ${x2}`)
// }

// // 5. Given three sides of a triangle. Check whether the triangle is valid or not. 
// // Print “yes” if it is valid and “no” otherwise.
// //  (Triangle is valid if the sum of its two sides are greater than the third side).

// let side1 = 2;
// let side2 = 3;
// let side3 = 5;

// if (side1 + side2 > side3 && side1 + side3 > side2 && side3 + side2 > side1) {
//     alert("yes")
// } else {
//     alert("no")
// }

// 6. Given a number.
// Determine whether it consists of 2 digits and whether the first digit is greater than the second one.
// Print“ yes”
// if it is, otherwise print“ no”.

// let a = 12;
// let b = parseInt(a / 10);
// let c = a % 10;

// if (a >= 10 && a <= 99 && b > c) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// 7. Given a number.Check
// if the number is a multiple of 3, 5 or 7 and output an appropriate message.

// let a = 105;
// let three = (a % 3 === 0);
// let five = (a % 5 === 0);
// let seven = (a % 7 === 0);
// let message = a + " is multiple of ";

// message += three ? "3 " : "";
// message += five ? "5 " : "";
// message += seven ? "7 " : "";

// console.log(message)

// 8. Given an age. Figure out whether someone is a baby (1 months - 12 months), toddler (1 year - 2 years), 
// child (3 years - 12 years), teenager (13 years - 17 years) or adult (18 years and more). 
// Also check that age in months is between 1 and 12.

let age = +prompt('Type the age between 1-100')
let ageType = prompt('Type months or years')

if (age <= 12 && ageType === 'months') {
    console.log("baby")
} else if (ageType === 'years') {
    if (age <= 2) {
        console.log("toddler")
    } else if (age >= 3 && age <= 12) {
        console.log("teenager")
    } else if (age >= 13 && age <= 17) {
        console.log("teenager")
    } else if (age >= 18) {
        console.log("adult")
    }
}