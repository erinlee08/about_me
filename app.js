'use strict';
var user;
user = prompt('Greeting, what is your name?');
console.log(user);

alert('Welcome ' + user + '!');

var question;

function questionOne(){                        //question one function decleared.
  question = prompt('Want to play some games now?');

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

var color = ['Red' , 'Blue' , 'White' , 'Black', 'Brown'];
var answer;
console.log(color);
var guess = 0;
var flag = false;
// question 3
var code = prompt('Next, is coding fun? Please type in Y or N');
console.log(code);
if (code === 'Y') {
  alert('So far it is!!');

function shades(){                                             //function shades defined.
  for (var i = 0; i < color.length; i++) {
    console.log(answer[i]);

    if (color[i] === 'Red') {
      alert('YES! ', color , ' is a POP of color. My fav too!');
      break;
    } else {
      alert('Keep trying');
      count++;
    };
  };
};
shades();                      //function shades called

var code = prompt('Next, is coding fun? Please type in Y or N');
console.log(code);

if (code.toUpperCase === 'Y' || code === 'y' || code.toUpperCase === 'YES' ||code === 'yes') {                       //error catching code
  console.log('So far it is!!');
} else {
  console.log('Keep going!');
};
// question 4
var work = prompt('Is learning how to code hard?true or false');
console.log(work);
if ( true || 't') {
  alert('Yes, it is!');
} else {
  alert('Show me what your trick is making it easy to learn coding!!');
};
//question 5
var fun = prompt('I know coding is hard, but it can also be fun, Right?');
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

var i;
if (i >= 2) {
  alert('Guessed too low');
  count++;
} else if ( i >= 4) {
  alert('Getting warmer!');
  count++;
} else if (i > 8) {
  alert('Whoa,, guessed too high!');
  count++;
} else if (i === 8 ) {
  alert('Bingo!');
  count++;
} else {
  alert('Keep trying!');
  count++;
}
