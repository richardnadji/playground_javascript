var min = 0;
var max = 10;
var randomNumber = getRandomNumber(min, max);
var guess;
var attempts = 0;
var correctGuess = false;

function getRandomNumber(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min);
}

/*
var counter = 0;
while ( counter < 10 ) {
  var random = getRandomNumber(10, 100);
  document.write(random + ' ');
  counter += 1;
}


while ( guess !== randomNumber ) {
  guess = getRandomNumber(min, max);
  attempts += 1;
}
document.write('<p>The random number was: ' + randomNumber + '</p>');
document.write('<p>It took this computer to ' + attempts + ' attempts to guess this number</p>');
*/

do {
  guess = prompt('Guess the secret number between 0 and 10 ' + randomNumber);
  attempts += 1;
  if ( parseInt(guess) === randomNumber ) {
    correctGuess = !correctGuess;
  }
} while ( !correctGuess )
document.write('<p>The secret number was: ' + randomNumber + '</p>');
document.write('<p>You needed ' + attempts + ' attempt(s) to guess the number</p>');
