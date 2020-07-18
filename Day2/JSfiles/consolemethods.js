//This .js file is called in html file in : js-assignment/Day2/assign2.html
//ABOUT console.log
console.log("This is my assignment on Javascript");
//console.log() is used to print the output to the console of the page.
//It can print any type of values for example; string,number,array,object,boolean.
console.log('abc')
console.log(12345.45)
console.log([23,41,56,3])
console.log(true)
console.log({a:"hello",b:"world"})


//ABOUT console.time & console.timeEnd
//These functions are used to find the timetaken in a block of code in the program.
//That block of code may be console,object,functions etc.
//For example
console.time('Time taken');
var l={a:5 , b:7 , c:9};
var m={a:2 , b:3 , c:4};
var n={a:1 , b:6 , c:8};
var o={a:14 , b:26 , c:12};
console.table({l, m, n, o})
console.timeEnd('Timetaken');
//This above written code shows the amount of time taken between console.time() and console.timeEnd().





//ABOUT console.error()
//This are used to output error messages.
console.error("This is an error");

//ABOUT console.warn()
//This method is used to output warnings at the console of the page.
console.warn("It's a warning here");


//ABOUT console.table()
//Given an example
//This method is used to display the objects in table form.
var l={a:5 , b:7 , c:9};
var m={a:2 , b:3 , c:4};
var n={a:1 , b:6 , c:8};
var o={a:14 , b:26 , c:12};
console.log({l, m, n, o})//Here the log method will simply display the numbers in object form.But table method will display it in Table form for the easy working.
console.table({l, m, n, o})


//ABOUT Custom Console Logs
console.log('%c Custom message','color:red;')
//these functions are used to display a custom message at console.
