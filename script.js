
function shuffleOrder(container){
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function renderQuiz() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    questions.forEach((q, qIndex) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = `question-${qIndex}`;

        const questionHeader = document.createElement('div');
        questionHeader.className = 'question-header';

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = q.question;
        if(!q.hiddenAmount){
            questionText.textContent += `(${q.answers.reduce((acc, {correct})=>acc+correct,0)} förväntade svar)`
        }

        questionHeader.appendChild(questionText);

        const checkIcon = document.createElement('span');
        checkIcon.className = 'feedback-icon check';
        checkIcon.textContent = '✓';
        checkIcon.style.color = '#10b981';

        const crossIcon = document.createElement('span');
        crossIcon.className = 'feedback-icon cross';
        crossIcon.textContent = '✗';
        crossIcon.style.color = '#ef4444';

        const answersDiv = document.createElement('div');
        answersDiv.className = 'answers';

        q.answers.forEach((a, aIndex) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer';
            answerDiv.dataset.correct = a.correct;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `q${qIndex}a${aIndex}`;
            checkbox.name = `question${qIndex}`;
            checkbox.value = aIndex;

            const label = document.createElement('label');
            label.htmlFor = `q${qIndex}a${aIndex}`;

            const textSpan = document.createElement('span');
            textSpan.textContent = a.text;

            const correctIndicator = document.createElement('span');
            correctIndicator.className = 'answer-indicator correct-label';

            const wrongIndicator = document.createElement('span');
            wrongIndicator.className = 'answer-indicator wrong-label';

            label.appendChild(textSpan);
            label.appendChild(correctIndicator);
            label.appendChild(wrongIndicator);

            answerDiv.appendChild(checkbox);
            answerDiv.appendChild(label);
            answersDiv.appendChild(answerDiv);
        });

        shuffleOrder(answersDiv)

        questionDiv.appendChild(questionHeader);
        questionDiv.appendChild(checkIcon);
        questionDiv.appendChild(crossIcon);
        questionDiv.appendChild(answersDiv);
        container.appendChild(questionDiv);
    });
}

function checkAnswers() {
    let correctCount = 0;

    questions.forEach((q, qIndex) => {
        const questionDiv = document.getElementById(`question-${qIndex}`);
        const answerDivs = questionDiv.querySelectorAll('.answer');
        const checkboxes = document.querySelectorAll(`input[name="question${qIndex}"]`);

        const selectedAnswers = Array.from(checkboxes)
            .map((cb, idx) => cb.checked ? idx : -1)
            .filter(idx => idx !== -1);

        const correctAnswers = [];
        answerDivs.forEach((answerDiv, idx) => {
            const isCorrect = answerDiv.dataset.correct === 'true';
            const isSelected = checkboxes[idx].checked;

            if (isCorrect) {
                correctAnswers.push(idx);
                answerDiv.classList.add('correct-answer');
            } else if (isSelected) {
                answerDiv.classList.add('wrong-answer');
            }
        });

        const isQuestionCorrect = selectedAnswers.length === correctAnswers.length &&
            selectedAnswers.every(idx => correctAnswers.includes(idx));

        questionDiv.classList.remove('correct', 'incorrect');
        questionDiv.classList.add(isQuestionCorrect ? 'correct' : 'incorrect');

        if (isQuestionCorrect) correctCount++;
    });

    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `${correctCount} / ${questions.length}`;
    resultsDiv.classList.add('show');

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

renderQuiz();