window.onload = function() {
    // Retrieve result details from localStorage
    var participantName = localStorage.getItem('userName');
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
        <p>Name of the participant: ${participantName}</p>
        <p>Total time taken: ${totalTimeTaken} seconds</p>
        <p>Total Questions: ${totalQuestions}</p>
        <p>Attempt: ${attempts}</p>
        <p>No of Correct Questions: ${correctQuestions}</p>
        <p>No of Wrong Questions: ${wrongQuestions}</p>
        <p>Score in percentage: ${scorePercentage}%</p>
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
