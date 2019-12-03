/* eslint-disable strict */
//Drill #1 - Functions as arguments (1)
function repeat(fn, n){
  for (let i = 0; i <= n; i++){
    return fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

//repeat function should call hello function five times
repeat(hello, 5);
//repeat function should call goodbye function five times
repeat(goodbye, 5);

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


//Drill #3 - Functions as return values 
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return callback(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const windWarning = hazardWarningCreator('Strong winds on the Road');