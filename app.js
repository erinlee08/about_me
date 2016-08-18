'use strict';
var user = prompt('Greeting, what is your name?');
console.log(user);

alert('Welcome ' + user + '!');
// quesiton 1
var question = prompt('Want to play some games now?');
console.log(question);

if ( question.toLowerCase() === 'y') {
  console.log(question);
  alert('Great!');
} else {
  console.log(question);
  alert('Oh man! Too bad, we are playing games anyway!');
};
// question 2
var color = ['Red' , 'Blue' , 'White' , 'Black', 'Brown'];
var answer = prompt('Fun time!!What is my favorite color?');
console.log(color);
var count = 0;
var guess = 0;

while ( guess < 6) {
  answer = prompt('Fun time!!What is my favorite color?');
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
// question 4
var code = prompt('Next, is coding fun? Please type in Y or N');
console.log(code);

if (code === 'Y') {
  console.log('So far it is!!');
} else {
  console.log('Keep going!');
};

// question 4
var workWork = prompt('Is learning how to code hard?true or false');
console.log(workWork);
if ( true || 't') {
  alert('Yes, it is!');
} else {
  alert('Show me what your trick is making it easy to learn coding!!');
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

if ( i >= 2) {
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
