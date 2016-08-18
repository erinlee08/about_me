'use strict';
var user = prompt('Greeting, what is your name?');
console.log(user);

alert('Welcome ' + user + '!');

var question = prompt('Want to play some games now?');
console.log(question);

if (question.toLowerCase() === 'y') {
  console.log('Great!');
} else {
  console.log('Oh man! Too bad, we are playing games anyway!');
};

var color = ['Red' , 'Blue' , 'White' , 'Black', 'Brown'];
var answer = prompt('Fun time!!What is my favorite color?');
console.log(color);
var flag;
var count = 0;

for (var i = 0; i < color.length; i++) {
  console.log(answer[i]);

  if (color[i] === 'Red') {
    alert('YES! ', color , ' is a POP of color. My fav too!');
    flag;
  } else {
    alert('Keep trying');
    count++;
  };
};

var code = prompt('Next, is coding fun?');
console.log(code);

if (code === 'Y') {
  console.log(user, 'So far it is!!');
} else {
  console.log('Keep going!');
};

var workWork = prompt('Do you think I find it lots of working, learning how to code?tur or false');
console.log(workWork);
if (true) {
  console.log('Yes, it is!');
} else {
  console.log('Show me what your trick is making it easy to learn coding!!');
};

}
var work = prompt('Besides coding, I was in dental field for a while. Guess how long I have been doing that?');
console.log(work);

if (work >= 2) {
  alert('Guessed too low');
  count++;
} else if (work >= 4) {
  alert('Getting warmer!');
  count++;
} else if (work > 8) {
  alert('Whoa,, guessed too high!');
  count++;
}else if (work === 8 ) {
  alert('Bingo!');
  count++;
} else {
  alert('Keep trying!');
  count++;
};
