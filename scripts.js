function checkAnswers() {
    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'A'
    };
    
    let score = 0;
    const resultElement = document.getElementById('result');
    
    // Clear previous marks
    document.querySelectorAll('label').forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });
    
    // Check answers
    for (let i = 1; i <= 3; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            const correctValue = correctAnswers[`q${i}`];
            
            if (selectedValue === correctValue) {
                score++;
                document.getElementById(`q${i}-${selectedValue.toLowerCase()}`).nextElementSibling.classList.add('correct');
            } else {
                document.getElementById(`q${i}-${selectedValue.toLowerCase()}`).nextElementSibling.classList.add('incorrect');
                document.getElementById(`q${i}-${correctValue.toLowerCase()}`).nextElementSibling.classList.add('correct');
            }
        }
    }
    
    resultElement.textContent = `Você acertou ${score} de 3 perguntas.`;
}
