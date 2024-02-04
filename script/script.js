function redirectToQuestions(category) {
    // Assuming you want to redirect to a page named 'questions.html' with the category in the URL
    window.location.href = `questions.html?category=${encodeURIComponent(category)}`;
  }

  // Assuming you have some script logic to handle entering the user's name and other functionalities
//   document.getElementById('enterButton').addEventListener('click', function() {
//     var userName = document.getElementById('userNameInput').value;
//     // Logic to handle entering the user's name
//   });

// Function to handle participant's name entry and store in localStorage
document.getElementById('enterButton').addEventListener('click', function() {
    var userName = document.getElementById('userNameInput').value.trim();
    if (userName !== '') {
        localStorage.setItem('participantName', userName);
                alert('Name saved successfully!');
    } else {
        alert('Please enter your name.');
    }
});


// Function to redirect to questions page with selected category
// Function to redirect to questions page with selected category
// function redirectToQuestions(category) {
//     console.log('Selected category:', category);
//     console.log('Questions data:', questionsData); // Check structure and content of questionsData
//     localStorage.setItem('selectedCategory', category);
//     window.location.href = 'questions.html';
// }
