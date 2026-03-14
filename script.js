let currentQuestions = [];

const quizes = { q1, q2, q3 };

function changeQuiz(name) {
    currentQuestions = quizes[name];
    renderQuiz();
    document.getElementById('results').classList.remove('show');
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function shuffleOrder(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function renderQuiz() {
    const container = document.getElementById('questionsContainer');
    
    container.innerHTML = currentQuestions.map((q, qIndex) => {
        const isTextInput = 'plainInput' in q;
        const expectedCount = !isTextInput && !q.hiddenAmount 
            ? `(${q.answers.filter(a => a.correct).length} förväntade svar)` 
            : '';

        return `
            <div class="question" id="question-${qIndex}" data-type="${isTextInput ? 'text' : 'choice'}">
                <div class="question-header">
                    <div class="question-text">${q.question} ${expectedCount}</div>
                </div>
                <span class="feedback-icon check">✓</span>
                <span class="feedback-icon cross">✗</span>
                
                <div class="answers">
                    ${isTextInput ? renderTextInput(q, qIndex) : renderChoices(q, qIndex)}
                </div>
            </div>
        `;
    }).join('');

    // Shuffle each answer group if they are choices
    document.querySelectorAll('.answers').forEach(shuffleOrder);
}

function renderChoices(q, qIndex) {
    return q.answers.map((a, aIndex) => `
        <div class="answer" data-correct="${a.correct}">
            <input type="checkbox" id="q${qIndex}a${aIndex}" name="question${qIndex}" value="${aIndex}">
            <label for="q${qIndex}a${aIndex}">
                <span>${a.text}</span>
                <span class="answer-indicator correct-label"> (Rätt)</span>
                <span class="answer-indicator wrong-label"> (Fel)</span>
            </label>
        </div>
    `).join('');
}

function renderTextInput(q, qIndex) {
    return `
        <div class="answer">
            <input type="text" id="q${qIndex}plainInput" name="question${qIndex}" placeholder="Skriv ditt svar här...">
            <label>
                <span class="answer-indicator correct-label">Rätt!</span>
                <span class="answer-indicator wrong-label">Fel. Rätt svar: ${q.plainInput}</span>
            </label>
        </div>
    `;
}
function checkAnswers() {
    let correctCount = 0;

    currentQuestions.forEach((q, qIndex) => {
        const questionDiv = document.getElementById(`question-${qIndex}`);
        const answerDivs = questionDiv.querySelectorAll('.answer');
        let isQuestionCorrect = true;

        questionDiv.classList.remove('correct', 'incorrect');
        answerDivs.forEach(div => div.classList.remove('correct-answer', 'wrong-answer'));

        if (questionDiv.dataset.type === 'text') {
            const input = questionDiv.querySelector('input[type="text"]');
            isQuestionCorrect = input.value.trim().toLowerCase() === q.plainInput.toLowerCase();
            if (isQuestionCorrect) {
                answerDivs[0].classList.add('correct-answer');
            } else {
                answerDivs[0].classList.add('wrong-answer');
            }
        } else {
            const checkboxes = questionDiv.querySelectorAll('input[type="checkbox"]');
            
            checkboxes.forEach((cb, idx) => {
                const isChecked = cb.checked;
                const isActuallyCorrect = q.answers[idx].correct;

                if (isActuallyCorrect) {
                    answerDivs[idx].classList.add('correct-answer');
                }
                if (isChecked && !isActuallyCorrect) {
                    answerDivs[idx].classList.add('wrong-answer');
                }
                if (isChecked !== isActuallyCorrect) {
                    isQuestionCorrect = false;
                }
            });
        }

        questionDiv.classList.add(isQuestionCorrect ? 'correct' : 'incorrect');
        if (isQuestionCorrect) correctCount++;
    });

    document.getElementById('score').textContent = `${correctCount} / ${currentQuestions.length}`;
    document.getElementById('results').classList.add('show');
}   

window.onload = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    }
    changeQuiz('q1');
}