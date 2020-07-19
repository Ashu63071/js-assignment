//Data types in Java Script

//Day 1 Assignment3

//1. Number: These are both interger and float values. This undergoes operations like multiplication,division,addition and so on. There are special numeric values in Javascript which are +Infinity , -Infinity and NaN.
//(+ or -) Infinity is special number exist in Javascript which can be output of any number divided by zero.
// Nan is a error character which is shown in html page in any wrong operation, like 5+a,etc. It represents 'Not a Number'.
var a=2,b=3;
var c=a+b;
c=a-b;
c=a*b;
c=a/b;
c=a/0;//outputs Infinity
c="hello " + 5//outputs hello 5
c=hello +5//outputs NaN



//2.String: These are any no. of characters in quotes.There are many functions in string.
var name="Ashu"
var str="Hello",st="World";
var string=str.concat(st);//to add two string
var a=str.length;//to find len of two string
// embed a variable
alert( `Hello, ${name}!` ); // Hello, Ashu!



//3.Null: These are not related to any other data types. It stores its own datatype 'null'.It simply means nothing,empty.It can be assigned as:
a=null;



//4.Undefined: Similar to null, undefined is of own datatypes .Practically it is possible to define any variable with undefines but it is not recommended. It is default value assigned to every variable.
a=undefined;



//5. Boolean: It is data types which gives value in true or false. like a statement ,(say):
var x=2,y=3;
var b=x==y;//results in false
b=x>y;//results in false
b=x<=y;//results in true
