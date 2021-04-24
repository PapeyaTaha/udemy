// let js = 'amazing';
// if (js === 'amazing') alert('javascript is FUN!');

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// --Assignment 1 value and variables--

// let countryName = "Bangladesh";
// let population = 147570;
// console.log(countryName);
// console.log(population);

// basic operators

// const now = 2021;
// const ageTaha = now - 1998;
// const ageSarah = now - 2018;
// console.log(ageTaha, ageSarah);

// console.log(ageTaha * 2, ageTaha / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Papeya';
// const lastName = 'Taha';
// console.log(firstName + ' ' + lastName);

// assignment operator 
// let x = 10 + 20; // 30
// x += 10; // x = x+10 = 40
// x *= 4; // x = x * 4 = 160
// x++; // x = x + 1
// console.log(x);

// comparison operator 
// console.log(ageTaha > ageSarah); // > , < , >= , <=
// console.log

//coding challenge 1//
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// string//
// const firstName = 'Taha';
// const job = 'teacher';
// const birthYear = 1998;
// const year = 2021;
// const Taha = " I'am " + firstName + ' , a ' + (year - birthYear) + " year old " + job + "!";
// console.log(Taha);
// // string template
// const TahaNew = `I'am ${firstName} a ${year - birthYear} year old ${job} ! `;
// console.log(TahaNew);

// console.log(`Just a regular string...`);
// console.log('string with \n\
// multiple \n\
// lines')
// console.log(`string
// multiple
// lines`);

// taking decision//
// const age = 19;
// const isOldEnough = age => 18;
// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗');

// }

// const age = 14;
// const isOldEnough = age => 18;
// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗');
// }
// control structure
/*if(){
}
else{

} */

// const age = 15;
// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young . Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;
// let century;
// if (birthYear >= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);



// coding challenge
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// // if (BMIMark > BMIJohn) {
// //     console.log("Mark's BMI is higher than John's!");
// // }
// // else {
// //     console.log("John's BMI is higher than Mark's!");
// // }
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
// }
// else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's!`);
// }

// Type conversion and coercion
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Taha'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// Truthy and Falsy Values
// 5 falsy values : 0 , ' ' , undefined , null , NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean("Taha"));
console.log(Boolean({}));

