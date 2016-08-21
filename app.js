'use strict';
var user = prompt('Greeting, what is your name?');
console.log(user);

alert('Welcome ' + user + '!');

var question = prompt('Want to play some games now?');
function questionOne(){                        //question one function decleared
  console.log(question);
  if (question.toUpperCase === 'Y' || question === 'y' || question.toUpperCase === 'YES' || question === 'yes') {                   //error catching for "question"
    console.log(question);
    alert('Great!');
  } else {
    console.log(question);
    alert('Oh man! Too bad, we are playing games anyway!');
  };
};
questionOne();                                   //question one called.

var answer = prompt('What is my fav color?');
var guess = 0;

function favColor() {            //user has 5 tries to get the right answer
  while (guess < 5) {
    if (answer === 'Red' || answer === 'red') {
      console.log(answer);
      alert('Great!You got it');
      break;
      guess++;
    } else {
      alert('keep going!');
      answer = prompt('What is my fav color?');
      guess++;
    }
  }
};
favColor();                //fx 2 called

var code = prompt('Next, is coding fun? Please type in Y or N');
function coding() {
  if (code === 'Y' || code === 'y') {
    console.log(code);
    alert('So far it is!!');
  } else if (code === NaN ) {
    console.log(code);
    alert('Please type in Y or N');
  } else {
    console.log(code);
    alert('Takes some getting used to');
}
coding();      //fx 3 created and called

var work = prompt('Learing to code is hardwork. What do you think ?true or false');
console.log(work);
if ( true || work === 't' || work === 'T') {
  alert('Yes, it is!');
} else {
  alert('Show me what your trick is making it easy to learn coding!!');
};
//question 5
var fun = prompt('I know coding is hard, but it will be worth it, Right?');
console.log(fun);
if( fun === 'Y' || fun === 't') {
  console.log(fun);
  alert('I think so too!');
} else {
  console.log(fun);
  alert('boo!');
};


var year = prompt('Besides coding, I was in dental field for a while. Guess how long I have been doing that? Please enter a number');
console.log(year);

function yearDen() {
for (var i = 0; i < 4; i++) {
  console.log(i);
  if (i >= 2) {
    alert('Guessed too low');
    guess++;
  } else if ( i < 7) {
    alert('Getting warmer!');
    guess++;
  } else if (i > 8) {
    alert('Whoa,, guessed too high!');
    guess++;
  } else if (i === 8 ) {
    alert('Bingo!');
    guess++;
    break;
  } else {
    alert('Keep trying!');
    guess++;
  }
};
// yearDen();
