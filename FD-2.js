//Drill #1 - Jedi name
//create a function called jediName
// eslint-disable-next-line strict
function jediName(firstName, lastName) {
  //create a variable that gets the first two letters of the first name
  let firstLets = firstName.substring(0, 2);
  //create a variable that gets the first three letters of the last name
  let lastLets = lastName.substring(0, 3);
  //create a variable that combines the first two variable into one word
  return lastLets + firstLets;
}

const jediNameFinal = jediName('Jordan', 'Castillo');
// eslint-disable-next-line no-console
console.log(jediNameFinal);

//Drill #2 - Beyond
// create a function called beyond
function beyond(num) {
  //if the number is infinite, log out 'And beyond'
  if (isFinite(num) === false) {
    console.log('And beyond!');
  }
  //if the number is finite and positive, log 'To infinity'
  else if (num > 0 && isFinite(num) === true) {
    console.log('To infinity');
  }
  //if the number is finite and negative, log 'To negative infinity'
  else if (num < 0 && isFinite(num) === true) {
    console.log('To negative infinity');
  }
  //if the number is zero, log 'Staying home'
  else if (num === 0) {
    console.log('Staying home');
  }
}

const beyondResult = beyond(0);
console.log(beyondResult);

//Drill #3 - Cracking the code
function decode(str) {
  //create a variable that gets the first letter of the string
  let firstLetter = str.charAt(0);
  //if the first letter is a, b, c, or d return the decoded letter
  if (firstLetter === 'a') {
    return str.charAt(1);
  }
  if (firstLetter === 'b') {
    return str.charAt(2);
  }
  if (firstLetter === 'c') {
    return str.charAt(3);
  }
  if (firstLetter === 'd') {
    return str.charAt(4);
  } else {
    return ' ';
  }
}

const decodeResult = decode('cycle');
console.log(decodeResult);

//Drill #4 - How many days in a month
function daysInMonth(month, leapYear) {
  let numOfDays = 0;
  switch (month) {
  case 'January':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'February':
    if (leapYear === true) {
      numOfDays = 29;
      return `${month} has ${numOfDays} days.`;
    } else if (leapYear === false) {
      numOfDays = 28;
      return `${month} has ${numOfDays} days.`;
    }
    break;

  case 'March':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'April':
    numOfDays = 30;
    return `${month} has ${numOfDays} days.`;

  case 'May':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'June':
    numOfDays = 30;
    return `${month} has ${numOfDays} days.`;

  case 'July':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'August':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'September':
    numOfDays = 30;
    return `${month} has ${numOfDays} days.`;

  case 'October':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  case 'November':
    numOfDays = 30;
    return `${month} has ${numOfDays} days.`;

  case 'December':
    numOfDays = 31;
    return `${month} has ${numOfDays} days.`;

  default:
    return 'Must provide a valid month.';
  }
}

const numOfDaysResult = daysInMonth('January');
console.log(numOfDaysResult);

//Drill #5 - Rock Paper Scissors
function rockPaper(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  //rock is equal to 1 
  if (num )
  //paper is equal to 2
  //scissors is equal to 3 
}