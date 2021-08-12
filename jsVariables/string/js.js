var name = "john";
console.log(name);
console.log(typeof name);
var age = 23;
console.log(age);
console.log(typeof age);
var job;
console.log(typeof job);
job = "teacher";
console.log(job);
var girl = false;
console.log(girl);
console.log(typeof girl);

var firstName, secondName, fullname;
firstName = prompt("What is your Name?");
secondName = prompt("What is your Surname");

fullname = firstName + " " +  secondName;

alert("Hello, " + fullname);
document.write("Hello, " + fullname);

/* parseInt */

var onenumber, twonumber, total;

onenumber = prompt("First Number");
twonumber = prompt("Two Number");

total = parseInt(onenumber) + parseInt(twonumber);

alert("Total: " + total);
