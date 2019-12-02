/* eslint-disable no-console */
// eslint-disable-next-line strict
function getYearOfBirth(age){
  return 2019 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

function yearOfBirth(age){
  if (age < 0){
    throw new Error('Age cannot be negative.');
  }
  if (name === undefined && age === undefined){
    throw new Error('Arguments not valid.');
  } 
  if (typeof name !== 'string'){
    throw new TypeError('Name must be a string!');
  }
  if (&& typeof age !== 'number'){
    throw new TypeError('Age must be a number!');
  }
}

try {
  const greeting1 = createGreeting('Jordan', 23);
  // eslint-disable-next-line no-console
  console.log(greeting1);
} catch(e) {
  console.error();
}
