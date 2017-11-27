document.write("Hello world");

var what = "I am a string variable";
var num = 33; //this is an int variable
var bool = true; //this is a boolean variable
var num2 = 44;
var userName = prompt("What is your name?"); //this takes input of the users name
var userNum = prompt("what is your first number?");
var userNum2 = prompt("What is your second number?");

alert(userName);
alert(userNum);
alert(userNum2);

if (userNum < userNum2) {
  alert("I am an alert box!");
}
else if (num > num2) {
  alert("I am the other alert box!");
}

var choice = prompt("Would you like to continue?");
