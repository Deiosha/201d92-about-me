'use strict';

console.log('Hello World');

let finalScore = 0;

let visitorName = prompt('What is your name?');
// console.log(visitorName);
alert(`Welcome to my site ${visitorName}! Please answer yes or no to the following questions.`);

function questionOneGuess() {
  let questionOneGuess = prompt('Do I like red velvet cake?').toUpperCase();

  if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
    // console.log('The answer is correct.)
    alert('Correct!');
    finalScore++;
  } else if(questionOneGuess === 'NO' || questionOneGuess === 'N') {
  // console.log('The answer is incorrect')
    alert('Incorrect, I love red velvet cake.');
  }
}
questionOneGuess();

function questionTwoGuess() {
  let questionTwoGuess = prompt('Is pink my favorite color?').toUpperCase();

  if(questionTwoGuess === 'YES' || questionTwoGuess === 'Y') {
    // console.log('The answer is correct.)
    alert('Good job!!');
    finalScore++;
  } else if(questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
  // console.log('The answer is incorrect')
    alert('Incorrect! Maybe you will answer correctly next time!');
  }
}
questionTwoGuess();

function questionThreeGuess() {
  let questionThreeGuess = prompt('Am I from Seattle?').toUpperCase();

  if(questionThreeGuess === 'YES' || questionThreeGuess === 'Y') {
  // console.log('The answer is incorrect')
    alert('Incorrect! I am not a Washingtonian.');
  } else if(questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
    // console.log('The answer is correct.)
    alert('You are correct. I am orginally from STL');
    finalScore++;
  }
}
questionThreeGuess();

function questionFourGuess() {
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
}
questionFourGuess();

function questionFiveGuess() {
  let questionFiveGuess = prompt('Am I an Aries?').toUpperCase();

  if(questionFiveGuess === 'YES' || questionFiveGuess === 'Y') {
  // console.log('The answer is incorrect')
    alert('Incorrect!');
  } else if(questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
    // console.log('The answer is correct.)
    alert('You are correct! I am a Taurus.');
    finalScore++;
  }
}
questionFiveGuess();

function questionSix() {
  let correctNumber = 5;
  let attemps = 4;
  while (attemps){
    let guess = +prompt('Guess a number 1-15');
    if(guess > correctNumber) {
      alert('Too high! Try again.');
    } else if (guess < correctNumber) {
      alert('Too low! Try again.');
    } else {
      alert('Correct!');
      finalScore++;
      break;
    }
    attemps--;
    if(attemps === 0) {
      alert(`The correct answer is ${correctNumber}`);
    }
  }
}
questionSix();

function questionSeven() {

  let colors = ['blue', 'red', 'pink', 'orange', 'black', 'purple'];
  for(let i = 0; i < 6; i++) {
    let colorsGuess = prompt('Guess a color').toLowerCase;

    for(let j = 0; j < colors.length; j++)
      if(colorsGuess === colors[j]) {
        alert('That is correct!');
        finalScore++;
        i = 6;
        break;
      }
  }
}
questionSeven();


alert(`Thank you for playing ${visitorName}. Thanks for coming to my site! You got ${finalScore} out of 7 correct.`);
