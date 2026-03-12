//variables and data types

// Store your name and print it
let Name = "ayesaha";
console.log(Name)


// Store age and calculate birth year
let age = 23;
let birthyear = 2025 - age 
console.log(birthyear)
// Swap two variables
let a = 3;
let b = 4;
[a,b] = [b,a];
console.log(a,b)

// Store price and apply 10% discount
let price = 1000;

let discount = price-(price/10);
console.log(discount)

// Concatenate first and last name
let firstName = "illa";
let secName = "messi";
let fullname = firstName + " " + secName;
console.log(fullname) 
// Check data type of different values
console.log(typeof(firstName))
console.log(typeof(secName))
console.log(typeof(fullname))

// Convert string to number
let messi = "ronaldo";
console.log(typeof(messi));
let New = +messi;
let NWe1 = Number(messi)
// Store temperature in celsius, convert to fahrenheit
let tem = 50;
let faren = (9/5)*tem+ 32;
console.log(faren) 
// Store your GPA, print pass or fail
let gpa = 3.41;
if (gpa>3.00) {
    console.log("pass");
}
else {
    console.log("fail")
}
// Calculate area of a room using variables
let len = 55;
let width = 40;
let area = (1/2)*len*width;
console.log(area)




// Operators

// Add two numbers
let a1 = 34;
let b1 = 55;
console.log(a1+b1);

// Find remainder of division
let c = 65;
let d = 44;
console.log(c%d)
// Check if number is even or odd
let num = 33;
if ((num%2)==0) {
    console.log("even")
}
else {
    console.log("odd")
}
// Compare two numbers, print bigger one
let num1 = 44;
let num2 = 33;
if (num1>num2) {
    console.log(num1, " is bigger.")
}
else {
    console.log(num2, " is bigger")
}
// Calculate simple interest
let principle = 10000;
let rate = 0.05;
let time = 3;

let interest = principle*rate*time;
console.log(interest)
// Find power of a number
let F = 3;
let D  = 4;
console.log(F**D)


