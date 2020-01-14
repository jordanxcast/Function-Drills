/* eslint-disable strict */
//Drill #1 - Functions as arguments (1)
function repeat(fn, n){
  for (let i = 0; i <= n; i++) {
    return fn();
  }
}
let hello = function(){
  console.log('Hello world');
}
let goodbye = function(){
  console.log('Goodbye world');
}
//repeat function should call hello function five times
repeat(hello, 5);
//repeat function should call goodbye function five times
repeat(goodbye, 5);
// ================================================================

//Drill #2 - Functions as arguments (2)
function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(i)){
      newArray.push(i);
    } 
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
// ================================================================


//Drill #3 - Functions as return values 
const hazardWarningCreator = function(typeOfWarning){
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
};
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const windWarning = hazardWarningCreator('Strong winds on the Road');

rocksWarning('Main St and Pacific Ave');
iceWarning('Centinela Ave and Olympic Blvd');
windWarning('Madewood St.');

// =========================================================
// Drill #4 - forEach, filter and map 

const filter2 = function(){
  let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
  
  const newTurtles = turtleMoves.filter(item => item[0] > -1 && item[1] > -1);
  console.log('turtleMoves array:', turtleMoves);
  console.log('newTurtles array:',newTurtles);

  const totalSteps = newTurtles.map(item => item[0] + item[1]);
  console.log('totalSteps:', totalSteps);

  const loggedSteps = totalSteps.forEach((item, i) => {
    i++;
    console.log(`Movement # ${i}: ${item} steps`);
  });
  
};

filter2();

// =========================================================
// Drill #5 - reduce
const strOfWords = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let evaluateWord = function(accumulator, word){
  console.log(word);
  if(word.length === 3){
    return accumulator + ' ';
  } else {
    let splitWord = word.split('');
    let wordLength = splitWord.length;
    let newWord = '';
    for(let i = 0; i <= splitWord.length; i++){
      if( i === wordLength){
        let uppCase = splitWord[i - 1].toUpperCase();
        newWord = splitWord.slice(0, i - 1).concat(uppCase).join('');
        console.log('New Word:', newWord);
        return accumulator + newWord;
      }
      
    }
    
  }
};

function reduceFunc(){
  const arrOfWords = strOfWords.trim().split(' ');
  console.log(arrOfWords);

  const decoded = arrOfWords.reduce(evaluateWord, ' ');
  console.log('reduced arr of words:', decoded);
}
reduceFunc(strOfWords);