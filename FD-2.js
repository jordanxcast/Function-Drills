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
  switch (month) {
  case 'January':
	case 'March':
	case 'May':
	case 'July':
	case 'August':
	case 'October':
	case 'December':
    return `${month} has 31 days.`;
		break;
  case 'February':
    if (leapYear) {
      return `${month} has 29 days.`;
    } else if (!leapYear) {
      return `${month} has 28 days.`;
    }
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days.`;
		break;
  default:
    return 'Must provide a valid month.';
  }
}

const numOfDaysResult = daysInMonth('February', true);
console.log(numOfDaysResult);

//Drill #5 - Rock Paper Scissors
function rockPaper(num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  //if both numbers are the same its a tie
  if (num === randomNo){
    return 'Tie! Try Again.';
  }
  //if the number inputted is not between 1 and 3, error
  if (num < 1 || num > 3 || typeof num !== 'number'){
    throw new Error('You must enter a number between 1 and 3');
  }
  //rock is equal to 1 
  //paper is equal to 2
  //scissors is equal to 3 
  if (num === 1 && randomNo === 2){
    return 'You loose. Paper beats Rock!';
  } if (num === 1 && randomNo === 3){
    return 'You Win! Rock beats Scissors.';
  } if (num === 3 && randomNo === 2){
    return 'You win! Scissors beats Paper.';
  } if (num === 3 && randomNo === 1){
    return 'You lose. Rock beats Scissors!';
  } if (num === 2 && randomNo === 1){
    return 'You win! Paper beats Rock.';
  } if (num === 2 && randomNo === 3){
    return 'You lose. Scissors beats Paper!';
  }
}

let gameResult = rockPaper(2);
console.log(gameResult);