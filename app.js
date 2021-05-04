import { checkForYes } from './utils.js';

const button = document.getElementById('start-button');
const resultsDisplay = document.getElementById('quiz-results');

button.addEventListener('click', () => {
    alert('You are about to partake in the Trial of Frienship');
    const wantsTrial = confirm('Do you wish to take this trial?');
    if (wantsTrial === false) {
        return;
    }
    const firstName = prompt('What is your first name, friend?');
    const lastName = prompt('What is your surr name, friend?');
    let score = 0;
    const question1 = prompt('Was red my favorite color?');
    if (checkForYes(question1)) {
        score++;
    }
    const question2 = prompt('Did I spend over $1000 on nerdy stuff?');
    if (checkForYes(question2)) {
        score++;
    }
    const question3 = prompt('Was I a machine wizard?');
    if (!checkForYes(question3)) {
        score++;
    }
    if (score === 3) {
        resultsDisplay.textContent = `Congrats ${firstName} ${lastName}! Your score was ${score} out of 3! You are worthy of the title BEST OF FRIENDS`;
        return;
    } else if (score >= 1) {
        resultsDisplay.textContent = `Congrats ${firstName} ${lastName}! Your score was ${score} out of 3! You are a friend of mine!`;
        return;
    } else {
        resultsDisplay.textContent = `Wow ${firstName}. Your score was ${score} out of 3! That's Harsh.`;
    }
});