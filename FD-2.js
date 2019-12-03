//Drill #1 - Jedi name
//create a function called jediName
// eslint-disable-next-line strict
function jediName(firstName, lastName){
  //create a variable that gets the first two letters of the first name
  let firstLets = firstName.substring(0,2);
  //create a variable that gets the first three letters of the last name
  let lastLets = lastName.substring(0,3);
  //create a variable that combines the first two variable into one word
  return lastLets + firstLets;
}

const jediNameFinal = jediName('Jordan', 'Castillo');
// eslint-disable-next-line no-console
console.log(jediNameFinal);

//Drill #2 - Beyond
// create a function called beyond 
function beyond(num){
  //if the number is infinite, log out 'And beyond'
  if (isFinite(num) === false){
    console.log('And beyond!');
  }
  //if the number is finite and positive, log 'To infinity' 
  else if (num > 0 && isFinite(num) === true){
    console.log('To infinity');
  }
  //if the number is finite and negative, log 'To negative infinity'
  else if (num < 0 && isFinite(num) === true){
    console.log('To negative infinity');
  }
  //if the number is zero, log 'Staying home'
  else if (num === 0){
    console.log('Staying home');
  }
}

const beyondResult = beyond(0);
console.log(beyondResult);

//Drill #3 - Cracking the code
function decode(str){
  //create a variable that gets the first letter of the string 
  let firstLetter = str.charAt(0);
  //if the first letter is a, b, c, or d return the decoded letter 
  if (firstLetter === "a"){
    return str.charAt(1);
  } 
  if (firstLetter === "b"){
    return str.charAt(2);
  } 
  if (firstLetter === "c"){
    return str.charAt(3);
  } 
  if (firstLetter === "d"){
    return str.charAt(4);
  } 
  else {
    return ' ';
  }
}

const decodeResult = decode('cycle');
console.log(decodeResult);


