
// 4. Loops

 // Print 1 to 50
let i;
for(i = 0;i<=50;i++) {
    console.log("i : ",i,"\n");
   
}
// Print all even numbers from 1-100
let y;
for(y=2;y<=100;y++){
    // if(y%2==0){ 
    console.log("\nEven numbers: ",y);
    y++;
    // }
}
// Sum of first 100 numbers

let j=0;
let sum = 0;
while (j<=100) {
    sum += j;
    j++;
}
console.log("sum: ",sum)              

// Multiplicatiogn table of any number
let num7 = 4;
let h;
for(h=1;h<=10;h++) {
    let nest = num7*h
    console.log(`${num7}*${h}=${nest}`)

}
// Reverse a number
let number= 4352;
let reversed = 0;
let newl;
while(number>0) {
    newl = number%10
    number = Math.floor(number/10)
    reversed = reversed*10+ newl
}
    console.log(reversed)
// Count digits in a number
let number4 = 3432434;
let count =0;
while(number>0) {
    number = Math.floor(number4/10)
    count++;

}
console.log(count)


// Print fibonacci sequence
let a = 0,b=1;
let next;
for(i=1;i<=10;i++) {
    console.log(a);
    next = a+b;
    a=b;
    b=next;
}
// Find factorial
let fact= 8;
let medss = 1;
for(i=1;i<=fact;i++){
    medss *= i
}
console.log("The Factorial is " ,medss)


// Print pattern of stars (triangle)
// *
// **
// ***
// ****
let nofstars = 4;
for(i=1;i<=nofstars;i++) {
    let row ="";
    for(let j=1;j<=i;j++){
        row += "*"
    }
    console.log(row)
}


// Guess the number game (loop until correct)
let comp = 25;
let userEnter = prompt("guess the number until you win! ")
while(userEnter != comp) {
    userEnter = prompt("OOPS! guess the number again! ")

}
 console.log(`Bro! You win! You enter the exact num ${userEnter}!`)


