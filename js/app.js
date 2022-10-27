'use strict';

let finalScore = 0;

console.log('Hello World');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please answer yes or no to the following questions.`);


let questionOneGuess = prompt('Do I like red velvet cake?').toUpperCase();

if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
  // console.log('The answer is correct.)
  alert('Correct!');
  finalScore++;
} else if(questionOneGuess === 'NO' || questionOneGuess === 'N') {
// console.log('The answer is incorrect')
  alert('Incorrect, I love red velvet cake.');
}

let questionTwoGuess = prompt('Is pink my favorite color?').toUpperCase();

if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y') {
  // console.log('The answer is correct.)
  alert('Good job!!');
  finalScore++;
} else if(questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
// console.log('The answer is incorrect')
  alert('Incorrect! Maybe you will answer correctly next time!');
}

let questionThreeGuess = prompt('Am I from Seattle?').toUpperCase();

if(questionThreeGuess === 'YES' || questionThreeGuess === 'Y') {
// console.log('The answer is incorrect')
  alert('Incorrect! I am not a Washingtonian.');
} else if(questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
  // console.log('The answer is correct.)
  alert('You are correct. I am orginally from STL');
  finalScore++;
}

let questionFourGuess = prompt('Am I 23 years old?').toUpperCase();

if(questionFourGuess === 'YES' || questionFourGuess === 'Y') {
  // console.log('The answer is correct.)
  alert('Great job!');
  finalScore++;
} else if(questionFourGuess === 'NO' ||
questionFourGuess === 'N') {
// console.log('The answer is incorrect')
  alert('Incorrect! I do not know if I should be offended.');
}

let questionFiveGuess = prompt('Am I an Aries?').toUpperCase();

if(questionFiveGuess === 'YES' || questionFiveGuess === 'Y') {
// console.log('The answer is incorrect')
  alert('Incorrect!');
} else if(questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
  // console.log('The answer is correct.)
  alert('You are correct! I am a Taurus.');
  finalScore++;
}

let myNum = 5;
let guess = 0;
let totalGuesses = 4;
let correct = false;

while (guess < totalGuesses && ! correct){
  let userGuess = prompt('Guess a number I am thinking');
  if (userGuess < myNum) {
    alert('Too low! Try again.');
    guess ++;
    console.log(guess);
  } else if(userGuess > myNum) {
    alert('Too high! Try again.');
    guess ++;
  } else {
    alert('Correct!!');
    finalScore++;
    correct = true;
  }
}

let guesstwo = 0;
let totalGuessesTwo = 6;
let correctTwo = false;

let colors = ['Blue','Red', 'Pink','Orange', 'Black', 'purple'];

while (guesstwo < totalGuessesTwo && ! correctTwo){
  let userGuessTwo = prompt('Guess a color');
  if (userGuessTwo < colors) {
    alert('Guess Again!');
    guesstwo ++;
  } else {
    alert('You are correct!');
    finalScore++;
    correctTwo = true;
  } if (totalGuessesTwo > guesstwo) {
    alert('the correct answers are Red, Pink ,Orange, Black, and purple');
  }
}




alert(`Thank you for playing ${visitorName}. Thanks for coming to my site! You got ${finalScore} out of 7 correct.`);
