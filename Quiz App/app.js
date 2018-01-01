
let quizIndex = 0;
let correct = 0;

let quiz = document.getElementById('startQuiz');
let questionsArea = document.getElementById('questions');

let quesNumber = document.getElementById('ques-num');
let quesCounter = 1;
quesNumber.innerHTML = 'Q'+ quesCounter+':';

let quesArray = [
    {
        id: 01,
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<js>',
        option2: '<script>',
        option3: '<javascript>',
        option4: '<scripting>',
        correctAns: '<script>'
    },
    {
        id: 02,
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'Both the <head> section and the <body> section are correct',
        option3: 'The <body> section',
        option4: 'None of these',
        correctAns: 'The <body> section'
    },
    {
        id: 03,
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<script name="xxx.js">',
        option2: '<script href="xxx.js">',
        option3: '<script src="xxx.js">',
        option4: 'None of these',
        correctAns: '<script src="xxx.js">'
    },
    {
        id: 04,
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        option3: 'Depend on the file',
        option4: 'None of these',
        correctAns: 'False'
    },
    {
        id: 05,
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'alert("Hello World");',
        option2: 'msg("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctAns: 'alert("Hello World");'
    },
    {
        id: 06,
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        option4: 'None of these',
        correctAns: 'function myFunction()'
    },
    {
        id: 07,
        question: 'How do you call a function named "myFunction"?',
        option1: 'myFunction()',
        option2: 'call function myFunction()',
        option3: 'call myFunction()',
        option4: 'myFunction = ()',
        correctAns: 'myFunction()'
    },
    {
        id: 08,
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i == 5 then',
        option2: 'if (i == 5)',
        option3: 'if i = 5',
        option4: 'if i = 5 then',
        correctAns: 'if (i == 5)'
    },
    {
        id: 09,
        question: 'What is the correct way to write a JavaScript array?',
        option1: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option2: 'var colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'var colors = "red", "green", "blue"',
        option4: 'var colors = ["red", "green", "blue"]',
        correctAns: 'var colors = ["red", "green", "blue"]'
    },
    {
        id: 10,
        question: 'How do you round the number 7.25, to the nearest integer?',
        option1: 'Math.round(7.25)',
        option2: 'round(7.25)',
        option3: 'rnd(7.25)',
        option4: 'Math.rnd(7.25)',
        correctAns: 'Math.round(7.25)'
    }
];

let nextButton = document.getElementById('next-button');


function startQuiz() {

    quiz.style.visibility = 'hidden';
    questionsArea.style.visibility = 'visible';

    nextButton.setAttribute('disabled', 'disabled');

    document.getElementById('question').innerHTML = quesArray[quizIndex].question;

    document.getElementById('opt1').innerHTML = quesArray[quizIndex].option1;
    document.getElementById('op1').value = quesArray[quizIndex].option1;

    document.getElementById('opt2').innerHTML = quesArray[quizIndex].option2;
    document.getElementById('op2').value = quesArray[quizIndex].option2;

    document.getElementById('opt3').innerHTML = quesArray[quizIndex].option3;
    document.getElementById('op3').value = quesArray[quizIndex].option3;

    document.getElementById('opt4').innerHTML = quesArray[quizIndex].option4;
    document.getElementById('op4').value = quesArray[quizIndex].option4;
    
}

function enableNextBtn() {
    nextButton.removeAttribute('disabled', 'disabled');
}



function nextBtn() {


    quizIndex++;    
    quesCounter++
    
    quesNumber.innerHTML = 'Q'+ quesCounter+':';
    

    let correctAnswer = quesArray[quizIndex - 1].correctAns;


    let radioName = document.querySelector('input[name = "radio"]:checked');

    if (radioName.value == correctAnswer) {
        correct++;
    }
    else {
        correct;
    }
    console.log(correct)

    if (quesArray[quizIndex] !== undefined) {

        
        document.getElementById('question').innerHTML = quesArray[quizIndex].question;

        document.getElementById('opt1').innerHTML = quesArray[quizIndex].option1;
        document.getElementById('op1').value = quesArray[quizIndex].option1;
        
        document.getElementById('opt2').innerHTML = quesArray[quizIndex].option2;
        document.getElementById('op2').value = quesArray[quizIndex].option2;

        document.getElementById('opt3').innerHTML = quesArray[quizIndex].option3;
        document.getElementById('op3').value = quesArray[quizIndex].option3;
        
        document.getElementById('opt4').innerHTML = quesArray[quizIndex].option4;
        document.getElementById('op4').value = quesArray[quizIndex].option4;
        
        radioName.checked = false;
    }
    else {
        questionsArea.style.visibility = 'hidden';
        document.getElementById('result').style.visibility = 'visible';
        let result = document.getElementById('showResult');

        let answer = correct / quesArray.length * 100;
        result.innerHTML = answer;

        // console.log(correct);
        console.log(quesArray.length)
    }

   
}