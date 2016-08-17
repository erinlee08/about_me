'use strict';
var user = prompt('Greeting, what is your name?');
console.log(user);

alert('Welcome ' + user + '!');

var color = prompt('Fun time!Guessing game! what my fav color is! Red, Blue, or White?');
console.log(color);

if (color.toLowerCase() === 'red') {
  console.log('YES! ', color , ' is a POP of color. My fav too!' , user);
} else if (color.toLowerCase() === 'blue' ){
  console.log(color , ' is like the sky!', user);
} else if (color.toLowerCase() === 'white') {
  console.log(color , ' is clean', user);
} else {
  console.log(user , ' Different shades of colors!');
};

var code = prompt('Next, is coding fun?');
console.log(code);

if (code === 'Y') {
  console.log(user, 'So far it is!!');
} else {
  console.log('Keep going!');
};
