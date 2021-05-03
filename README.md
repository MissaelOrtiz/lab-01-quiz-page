# lab-01-quiz-page

## HTML Plan
1) Some content about myself
2) A button to start the quiz
    Why) To initiate the quiz
    How) document.getElementById('button).addEventListener
3) A place to display user score
    Why) To show state change from quiz
    How) div/span with ID to grab

## State
1) User score starts at zero and is incremented as they answer questions correctly

## Events
1) User clicks 'start quiz' button
    -) On click, the quiz begins with..
        -) display an alert to begin quiz
        -) display a confirmation to start quiz
            -) If no, break out of quiz
            -) If yes, continue with quiz
        -) Launch a prompt with a question
            -) store user imput within variable userInput
            -) compare userInput with correct answer
                -) If matching, increment userScore by one and continue
                -) If not matching, continue without incrementing userScore
        -) Repeat process for 3 questions
        -) Display userScore in HTML element