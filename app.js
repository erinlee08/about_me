'use strict';
var user = prompt('Greeting, what is your name?');
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
var answer = prompt('Fun time!!What is my favorite color?');
console.log(color);
var count = 0;

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

var workWork = prompt('Do you think I find it lots of work, learning how to code?true or false');
console.log(workWork);
if ( true || 't') {
  console.log('Yes, it is!');
} else {
  console.log('Show me what your trick is making it easy to learn coding!!');
};

var good = prompt('I know coding is hard, but I will be successful. Right?');
console.log(good);
if( good === 'Y' || good === 't') {
  console.log(good);
  alert('I think so too!');
} else {
  console.log(good);
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
};
