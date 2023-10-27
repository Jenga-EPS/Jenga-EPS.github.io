let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia");

    let bruceSelected = document.getElementById("bruce").checked;
    let chanSelected = document.getElementById("chan").checked;
    let carlSelected = document.getElementById("carl").checked;

    if (bruceSelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    } else if (chanSelected) {
        triviaAnswer.innerHTML = fname + " nah, Bruce Lee is so much better!";
    } else { 
        triviaAnswer.innerHTML = fname + ", what is wrong with you?";
    }
}

