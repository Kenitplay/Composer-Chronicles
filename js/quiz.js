const quizData = [
    { question: "Which composer is associated with the Baroque era?", options: ["Mozart", "Bach", "Beethoven", "Chopin"], answer: "Bach" },
    { question: "Which era is known for its emotional depth and expressive music?", options: ["Baroque", "Classical", "Romantic", "Modern"], answer: "Romantic" },
    { question: "Which composer is famous for composing symphonies in the Classical era?", options: ["Handel", "Tchaikovsky", "Mozart", "Liszt"], answer: "Mozart" },
    { question: "Which instrument was commonly used in Baroque music?", options: ["Piano", "Harpsichord", "Saxophone", "Electric Guitar"], answer: "Harpsichord" },
    { question: "Who composed the 'Moonlight Sonata'?", options: ["Beethoven", "Schubert", "Vivaldi", "Debussy"], answer: "Beethoven" },
    { question: "Which era introduced the use of symphonies and sonatas?", options: ["Baroque", "Classical", "Romantic", "Medieval"], answer: "Classical" },
    { question: "Which composer is known for 'The Four Seasons'?", options: ["Bach", "Vivaldi", "Handel", "Strauss"], answer: "Vivaldi" },
    { question: "Which period saw the rise of opera as a major art form?", options: ["Renaissance", "Baroque", "Modern", "Romantic"], answer: "Baroque" },
    { question: "Who is known as the 'Father of the Symphony'?", options: ["Mozart", "Haydn", "Schubert", "Chopin"], answer: "Haydn" },
    { question: "Which era emphasized experimentation and breaking traditional music rules?", options: ["Classical", "Romantic", "Modern", "Baroque"], answer: "Modern" }
];

const identificationData = [
    { question: "Who composed the famous opera 'The Magic Flute'?", answer: "Mozart" },
    { question: "Which famous composer wrote the piano piece 'Clair de Lune'?", answer: "Debussy" },
    { question: "Who is known for composing the 'Eine kleine Nachtmusik'?", answer: "Mozart" },
    { question: "Which composer is famous for the '1812 Overture'?", answer: "Tchaikovsky" },
    { question: "Who composed the orchestral work 'Boléro'?", answer: "Ravel" }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizData.forEach((q, index) => {
        let questionHTML = `<div class='mb-4'><p><strong>${index + 1}. ${q.question}</strong></p>`;
        q.options.forEach(option => {
            questionHTML += `<div class='form-check'>
                <input class='form-check-input' type='radio' name='q${index}' value='${option}'>
                <label class='form-check-label'>${option}</label>
            </div>`;
        });
        questionHTML += `<p id='feedback${index}' class='feedback'></p></div>`;
        quizContainer.innerHTML += questionHTML;
    });

    const identificationContainer = document.getElementById("identification");
    identificationData.forEach((q, index) => {
        identificationContainer.innerHTML += `
            <div class="mb-4">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <input type="text" class="form-control" id="answer${index}" placeholder="Your answer">
                <p id="identificationFeedback${index}" class="feedback"></p>
            </div>`;
    });
}

function submitQuiz() {
    let score = 0;

    // Music Quiz Score
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name='q${index}']:checked`);
        const feedback = document.getElementById(`feedback${index}`);
        if (selectedOption) {
            if (selectedOption.value === q.answer) {
                score++;
                feedback.innerHTML = "✅ Correct!";
                feedback.className = "feedback correct";
            } else {
                feedback.innerHTML = `❌ Incorrect! The correct answer is <b>${q.answer}</b>.`;
                feedback.className = "feedback incorrect";
            }
        } else {
            feedback.innerHTML = `⚠️ No answer selected! The correct answer is <b>${q.answer}</b>.`;
            feedback.className = "feedback incorrect";
        }
    });

    // Identification Test Score
    identificationData.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim();
        const feedback = document.getElementById(`identificationFeedback${index}`);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score++;
            feedback.innerHTML = "✅ Correct!";
            feedback.className = "feedback correct";
        } else {
            feedback.innerHTML = `❌ Incorrect! The correct answer is <b>${q.answer}</b>.`;
            feedback.className = "feedback incorrect";
        }
    });

    document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length + identificationData.length}!`;

    // Disable all inputs to prevent further interaction
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);

    // Hide the submit button and show the "Go Home" button
    document.querySelector('button.btn-primary').style.display = 'none';
    document.getElementById("goHomeBtn").style.display = 'inline-block';
}

function goHome() {
    window.location.href = '../index.html'; 
}

loadQuiz();