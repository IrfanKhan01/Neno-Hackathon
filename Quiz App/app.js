
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
        question: 'which one is the capital city of pakistan',
        option1: 'Karcahi',
        option2: 'Lahore',
        option3: 'Islamabad',
        option4: 'Faisalabad',
        correctAns: 'Islamabad'
    },
    {
        id: 02,
        question: 'which one is the biggest city of pakistan',
        option1: 'Karcahi',
        option2: 'Lahore',
        option3: 'Islamabad',
        option4: 'Faisalabad',
        correctAns: 'Karachi'
    },
    {
        id: 03,
        question: 'which one is the most advanced city of pakistan',
        option1: 'Karcahi',
        option2: 'Lahore',
        option3: 'Islamabad',
        option4: 'Faisalabad',
        correctAns: 'Islamabad'
    },
    {
        id: 04,
        question: 'HTML is a ........... language',
        option1: 'Markup',
        option2: 'Scripting',
        option3: 'Programming',
        option4: 'Interpreting',
        correctAns: 'Markup'
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