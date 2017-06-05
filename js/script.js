var min = 0;
var max = 10000;
var randomNumber = getRandomNumber(min, max);
var guess;
var attempts = 0;

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
*/

while ( guess !== randomNumber ) {
  guess = getRandomNumber(min, max);
  attempts += 1;
}
document.write('<p>The random number was: ' + randomNumber + '</p>');
document.write('<p>It took this computer to ' + attempts + ' attempts to guess this number</p>');
