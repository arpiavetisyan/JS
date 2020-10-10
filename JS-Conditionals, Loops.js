// 1. Given a positive integer. Bring the last digit of the number to the beginning.  
// Print the new number. If the last digit of the inserted number is 0, the 
// number remains the same.

let a = 367; // 1002 250 8
let b = a % 10;
let c = parseInt(a / 10)
let d = +`${b}${c}`

if (b > 0 && c !== 0) {
    alert(d)
} else {
    alert(a)
}

// 2. Given the following code. Rewrite it using only two if operators. (Hint: use logical operators).

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1;
}

if (n % 3 === 0 && n % 10 === 0) {
    j += 1
}

//  3. Given a number. Find the difference between its biggest and smallest digits.

var number = 4593653;

var max = 0;
var min = number % 10;

while (number > 0) {
    var currentDigit = number % 10;
    max = Math.max(currentDigit, max);
    min = Math.min(currentDigit, min);
    number = Math.floor(number / 10);
}

// 4. Input three numbers a, b, c respectively, where a is nonzero 
// number and write a program to solve quadratic equations: ax2 + bx +c = 0.
// (Hint: use Math.pow or Math.sqrt)

let a = 5;
let b = -13;
let c = 6;
let d = Math.pow(b, 2) - 4 * a * c;
let x1 = (-b + Math.sqrt(d)) / (2 * a)
let x2 = (-b - Math.sqrt(d)) / (2 * a)

if (a === 0) {
    alert(`Enter valid constants`)
} else if (d < 0) {
    alert(`Solution does not exists`)
} else if (d === 0) {
    alert(`The solution is ${x1}`)
} else {
    alert(`The solution is ${x1} and ${x2}`)
}