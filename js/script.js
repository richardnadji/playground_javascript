function getRandomNumber(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min);
}

var counter = 0;
while ( counter <= 10 ) {
  var random = getRandomNumber(10, 100);
  document.write(random);
  counter += 1;
}
