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
console.log(jediNameFinal);