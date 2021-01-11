let question = document.getElementById('question');

let questions = [

    'x = y - x<br>y = z + x<br>z = x + y<br><br>Find x',
    'x = z + 5<br> x = z<br><br>Find x'

]

let answers = [

    'x+y','x + y', 'x+5', 'x + 5'

]

let questionPicker = Math.floor(Math.random()*Math.floor(questions.length));

question.innerHTML = questions[questionPicker];

let answer1 = answers[questionPicker];

let answer2 = answers[questionPicker+1];

function confirm(){

    let userAnswer = document.getElementById('userAnswer').value;

    if (userAnswer == answer1 || userAnswer == answer2){

        alert('Congratulations! You got it right!');

        window.location.reload();

    } else {

        alert('INCORRECT ANSWER');

    }

}

