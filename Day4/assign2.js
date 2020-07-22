
let student = {
     name:"Helskink",
     age:24,
     project: {
         dicegame: "Two player dice game using Javascript"
     }
 }
 for(key in student){
     console.log(`The key is ${key} and the value is ${student[key]}`);
 }