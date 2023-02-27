let userName = '';
let name= "Alyssa";

if (userName || "Alyssa") {
  console.log(`Hello user!`);
} else {
  console.log(`Hello, ${userName}!`);
}

let userQuestion = "Do I like coding?";
 console.log(`${name} asked: ${userQuestion}`);

 let randomNumber = Math.floor(Math.random() * 8);
 let eightBall = " ";

 if ( eightBall && randomNumber === 0 ) {
  console.log("It is certain.");
 } else if (eightBall && randomNumber === 1){
   console.log("It is decidedly so.");
 } else if ( eightBall && randomNumber === 2){
   console.log("Hell yea!")
 } else if ( eightBall && randomNumber === 3){
   console.log("Do not count on it.");
 } else if (eightBall && randomNumber === 4){
   console.log("My sources say no.");
 } else if (eightBall && randomNumber === 5){
   console.log("Kinda, yes.");
 } else if (eightBall && randomNumber === 6){
   console.log("It is tempting.");
 } else if (eightBall && randomNumber === 7){
  console.log('Yes, but holding back');
 } else {
   console.log("Roll again!");
 }

 console.log(eightBall);