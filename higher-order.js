/* eslint-disable strict */
//Drill #1 - Functions as arguments
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