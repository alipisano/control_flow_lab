// Question # 1

var verse = prompt("How many verses would you like to hear?");
    console.log(verse);  
for (i = verse; i > 0; i--){
    if (i > 1){
         console.log(i + " bottles of beer on the wall," + " " + i + " " + "bottles of beer! Take one down and pass it around" + " " + (i-1) + " " + "bottles of beer on the wall!");
    }
    else {
        console.log(i + " " + " bottle of beer on the wall," + " " + i + " " + "bottle of beer! Take one down and pass it around, no more bottles of beer on the wall!");
    } 
    }

// Question #2 

var userLogin = {name: "Ali",
                 password: "hello"}

var input = prompt("Enter the password for " + userLogin.name)
for (i = 0; i < 3; i++) {
if (userLogin.password === input) {
    console.log("It's a match");
    break
    }
else {
    console.log ("Error");
    input = prompt("Enter the password for " + userLogin.name)
}    
}

// Question # 3

var securityQuestions = [{ question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }, { question: "Who do you like?", expectedAnswer: "No one"}, {question: "What was your first car?", expectedAnswer: "Jeep"}]
var input;
for (i = 0; i < 3; i++) {
input = prompt(securityQuestions[i].question)
    if (securityQuestions[i].expectedAnswer === input) {
        }
    else if (securityQuestions[i].expectedAnswer !== input) {
            alert("Error");
            break; 
        }
    }

