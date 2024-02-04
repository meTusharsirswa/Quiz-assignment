window.onload = function() {
    // Retrieve result details from localStorage
    var participantName = localStorage.getItem('userName');
    if (!participantName) {
        participantName = "Participant"; // Assign default name
    }
    var totalTimeTaken = localStorage.getItem('totalTimeTaken');
    var totalQuestions = localStorage.getItem('totalQuestions');
    var attempts = localStorage.getItem('attempts');
    var correctQuestions = localStorage.getItem('correctQuestions');
    var wrongQuestions = localStorage.getItem('wrongQuestions');
    var scorePercentage = localStorage.getItem('scorePercentage');
    var category = localStorage.getItem('category'); // Retrieve the category

    // Display result details
    var resultDetails = document.getElementById('resultDetails');
    resultDetails.innerHTML = ` 
        <p> <strong>${participantName} </strong> Your result is:</p>
        <p>Total time taken: <strong>${totalTimeTaken} seconds </strong></p>
        <p>Total Questions: <strong>${totalQuestions} </strong></p>
        <p>Attempt: <strong> ${attempts} </strong></p>
        <p> Correct : <strong> ${correctQuestions} </strong></p>
        <p>Wrong: <strong> ${wrongQuestions} </strong></p>
        <p>Percentage:<strong> ${scorePercentage}% </strong></p>
    `;

    // Button event listeners
    var startAgainButton = document.getElementById('startAgainButton');
    startAgainButton.addEventListener('click', function() {
        // Go back to the previous page
        history.back();
    });
    var goToHomeButton = document.getElementById('goToHomeButton');
    goToHomeButton.addEventListener('click', function() {
        // Redirect to the home page
        window.location.href = 'index.html';
    });
};
