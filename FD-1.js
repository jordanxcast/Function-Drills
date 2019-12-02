// eslint-disable-next-line strict
function createGreeting(name, age) {
  return `Hi, my name is ${name} and I'm ${age} years old`;
}

function getYearOfBirth(age){
  const yearOf = 2019 - age;
  return `I was born in ${yearOf}`;
}

const greeting1 = createGreeting();
// eslint-disable-next-line no-console
console.log(greeting1);

