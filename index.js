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


// 3. Conditionals (if/else)

// Check if number is positive, negative or zero
let number = -22;
if (number>0) {
    console.log("Number is positive")
}
else if (number<0) {
    console.log("Number is negative")
}
else {
    console.log("Number is 0")
}

// Grade calculator (A, B, C, D, F)
let nember = 66;
if (nember>=90) {
    console.log("Grade is A")
}
else if (nember>=80) {
    console.log("Grade is B")
}
else if (nember>=70) {
    console.log("Grade is C")
}
else if (nember>=60) {
    console.log("Grade is D")
}
else {
    console.log("Grade is F")
}
// Check if year is leap year
let year = 2020;
if (year%4==0){
    console.log("yes it is a leap year")
}
else    {
    console.log("NO, its not a leap year")
}
// Biggest of three numbers
let nember1 = 43;
let nember2 = 333;
let nember3 = 888;
if (nember1>nember2) {
    if (nember1>nember3) {
        console.log(nember1, " is bigger")
    }
}
if (nember2>nember3) {
    if (nember2>nember1) {
        console.log(nember2, " is bigger")
    }
}
else {
    console.log(nember3," is bigger!")
}

// Check if triangle is valid
let side1 = 3;
let side2 = 4;
let side3 = 5;
if (side1+side2>side3&& side1+side3>side2&& side2+side3>side1) {
    console.log("Yesss! its a triangle")
}
else {
    console.log("No, its not a triangke")
}
// Traffic light (red/yellow/green print message)
let lightcolor = "red";

if (lightcolor==="red") {
    console.log("the light is red")
}
else if(lightcolor==="Yellow") {
    console.log("the light is Yellow")
}
else {
    console.log("the light is green")
}
// Check if number is divisible by 3 and 5
let value = 15;

if (value%3==0){
    console.log(value," is divisible by 3!")
}
else if (value%5==0) {
    console.log(value, " is divisible by 5!")
}
else if (value%3==0 && value%5==0) {
    console.log("Value is divisible by both 3 and 5")
}
else {
    console.log("Value is divisible by none")
}
// Simple login (if username and password match)
const validUsername = "lomba";
const validPassword = "benta"
let inputUsername = "lomba";
let inputPassword = "benta";


if (inputUsername===validUsername && inputPassword===validPassword) {
    console.log("you can login!")
}
else {
    console.log("U cannot login")
}

// Age category (child, teen, adult, senior)
let AGE = 66;
if (AGE <= 12) {
    console.log("You are a child!")
}
else if (AGE <= 19) {
    console.log("You are a teen!")
}
else if (AGE <= 40) {
    console.log("You are a Adult!")
}
else {
    console.log("You are a senior citizen Sir!")
}


// Calculator with +, -, *, /

let value1 = 33;
let value2 = 56;

console.log("The addition of two values is: ",value1+value2)
console.log("The ssubtraction of two values is: ",value1-value2)
console.log("The multiplivation of two values is: ",value1*value2)
console.log("The divition of two values is: ",value1/value2)