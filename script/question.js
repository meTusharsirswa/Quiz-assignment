// Define questions data by category
var questionsData = {
  "Pipes and Cisterns": [
    {
      question: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in:",
      options: ["14 hours", "3 hours", "12 hours", "17 hours"],
      correctOption: 0, 
    },
    {
      question: "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after: ",
      options: ["19 min.", "4 min.", "9 min.", "8 min."],
      correctOption: 2,
    },
    {
      question: " Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is: ",
      options: ["60 gallons", "160 gallons", "180 gallons", "120 gallons"],
      correctOption: 3,
    },
    {
      question: " A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank? ",
      options: ["15 hours", "Cannot be determined", "35 hours", "None of these"],
      correctOption: 1,
    },
    {
      question: " Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank? ",
      options: ["12 min", "10 min", "18 min", "6 min"],
      correctOption: 0,
    },
    {
      question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank? ",
      options: ["10 min. 20 sec.", "12 min. 10 sec.", "14 min. 40 sec.", "8 min. 30 sec."],
      correctOption: 2,
    },
    {
      question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in: ",
      options: ["144 min.", "81 min.", "34 min.", "137 min."],
      correctOption: 0,
    },
    {
      question: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
      options: ["3 hrs 15 min", "3 hrs 35 min", "2 hrs 30 min", "3 hrs 45 min"],
      correctOption: 3,
    },
    {
      question: " Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is: ",
      options: ["10", "14", "18", "19"],
      correctOption: 1,
    },
    {
      question: " A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:  ",
      options: ["10 hours", "15 hours", "18 hours", "19 hours"],
      correctOption: 1,
    },
    
  ],
  "Probability" : [
    {
      question: "What is the probability of flipping a fair coin and getting heads?",
      options: ["1/2", "1/3", "1/4", "1/6"],
      correctOption: 0
    },
    {
      question: "If you roll a fair six-sided die, what is the probability of rolling a number less than 3?",
      options: ["1/3", "1/6", "1/2", "2/3"],
      correctOption: 1
    },
    {
      question: "If you randomly draw a card from a standard deck of 52 cards, what is the probability of drawing a red card (hearts or diamonds)?",
      options: ["1/2", "1/4", "1/3", "1/6"],
      correctOption: 2
    },
    {
      question: "What is the probability of rolling a total of 7 on two fair six-sided dice?",
      options: ["1/6", "1/12", "1/9", "1/8"],
      correctOption: 0
    },
    {
      question: "If you randomly select a month from the year, what is the probability of selecting a month with 31 days?",
      options: ["7/12", "1/4", "1/6", "1/2"],
      correctOption: 0
    },
    {
      question: "If you randomly pick a letter from the word 'PROBABILITY,' what is the probability of selecting a vowel?",
      options: ["4/11", "2/11", "3/11", "5/11"],
      correctOption: 0
    },
    {
      question: "If you flip a fair coin three times, what is the probability of getting at least one head?",
      options: ["7/8", "1/8", "3/8", "5/8"],
      correctOption: 0
    },
    {
      question: "What is the probability of randomly selecting a prime number between 1 and 10?",
      options: ["2/5", "3/5", "1/2", "1/3"],
      correctOption: 0
    },
    {
      question: "If you roll two fair six-sided dice, what is the probability of rolling a sum greater than 9?",
      options: ["5/18", "5/12", "1/6", "2/9"],
      correctOption: 0
    },
    {
      question: "If you shuffle a standard deck of 52 cards and draw one card, what is the probability of drawing a face card (jack, queen, or king)?",
      options: ["3/13", "1/4", "1/3", "1/2"],
      correctOption: 0
    }
  ],
   "Problems on age" : [
    {
      question: "In 5 years, Alice will be three times as old as she was 7 years ago. How old is Alice now?",
      options: ["8 years", "10 years", "12 years", "14 years"],
      correctOption: 2
    },
    {
      question: "The sum of the ages of a father and his son is 45 years. Three years ago, the father was five times as old as his son. Find the present ages of the father and the son.",
      options: ["Father: 40 years, Son: 5 years", "Father: 42 years, Son: 3 years", "Father: 43 years, Son: 2 years", "Father: 44 years, Son: 1 year"],
      correctOption: 1
    },
    {
      question: "A mother is twice as old as her daughter. Four years ago, the sum of their ages was 36 years. Find their present ages.",
      options: ["Mother: 32 years, Daughter: 16 years", "Mother: 36 years, Daughter: 18 years", "Mother: 40 years, Daughter: 20 years", "Mother: 42 years, Daughter: 21 years"],
      correctOption: 1
    },
    {
      question: "The ages of a father and his son add up to 55. The father’s age is four times the son’s age. What are their ages?",
      options: ["Father: 40 years, Son: 15 years", "Father: 44 years, Son: 11 years", "Father: 45 years, Son: 10 years", "Father: 50 years, Son: 5 years"],
      correctOption: 2
    },
    {
      question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. Find their present ages.",
      options: ["Father: 48 years, Son: 24 years", "Father: 45 years, Son: 21 years", "Father: 50 years, Son: 26 years", "Father: 52 years, Son: 28 years"],
      correctOption: 3
    },
    {
      question: "The age of father 10 years ago was three times the age of his son. Ten years hence, father’s age will be twice that of his son. Find their present ages.",
      options: ["Father: 50 years, Son: 20 years", "Father: 40 years, Son: 15 years", "Father: 45 years, Son: 25 years", "Father: 55 years, Son: 30 years"],
      correctOption: 0
    },
    {
      question: "Ten years ago, the age of a mother was seven times the age of her son. Ten years hence, the age of the mother will be three times that of her son. Find their present ages.",
      options: ["Mother: 40 years, Son: 5 years", "Mother: 30 years, Son: 3 years", "Mother: 35 years, Son: 4 years", "Mother: 42 years, Son: 6 years"],
      correctOption: 1
    },
    {
      question: "The sum of the present ages of a father and his son is 60 years. Six years ago, the father’s age was five times the age of the son. Find their present ages.",
      options: ["Father: 40 years, Son: 20 years", "Father: 45 years, Son: 15 years", "Father: 50 years, Son: 10 years", "Father: 55 years, Son: 5 years"],
      correctOption: 2
    },
    {
      question: "A father said to his son, 'I was as old as you are at present at the time of your birth.' If the father’s age is 38 years now, what was the son’s age five years back?",
      options: ["10 years", "14 years", "19 years", "24 years"],
      correctOption: 1
    },
    {
      question: "The ratio of ages of father and his son is 4 : 1. Five years ago, the ratio was 5 : 1. Find their present ages.",
      options: ["Father: 45 years, Son: 11 years", "Father: 50 years, Son: 10 years", "Father: 40 years, Son: 10 years", "Father: 55 years, Son: 14 years"],
      correctOption: 2
    }
   ],
   
    "Profit and loss" : [
      {
        question: "A shopkeeper sells an article at a profit of 25%. If he had bought it for 20% less and sold it for Rs. 10.50 less, he would have gained 30%. Find the cost price of the article.",
        options: ["Rs. 80", "Rs. 100", "Rs. 120", "Rs. 150"],
        correctOption: 1
      },
      {
        question: "By selling an article for Rs. 60, a man gains 20%. What will be the selling price of the article to gain 40%?",
        options: ["Rs. 90", "Rs. 100", "Rs. 120", "Rs. 140"],
        correctOption: 2
      },
      {
        question: "A man sells two radios for Rs. 1560 each. On one, he gains 19% and on the other, he loses 19%. Find his gain or loss percent in the whole transaction.",
        options: ["3.61% gain", "3.61% loss", "4.81% gain", "4.81% loss"],
        correctOption: 1
      },
      {
        question: "A shopkeeper sells an article at a loss of 10%. If he had sold it for Rs. 50 more, he would have gained 5%. Find the cost price of the article.",
        options: ["Rs. 500", "Rs. 600", "Rs. 700", "Rs. 800"],
        correctOption: 0
      },
      {
        question: "A person sells two articles at Rs. 3200 each. On one, he gains 25% and on the other, he loses 25%. Find his total gain or loss percent in the whole transaction.",
        options: ["1.56% gain", "1.56% loss", "3.13% gain", "3.13% loss"],
        correctOption: 1
      },
      {
        question: "A merchant marks his goods at 20% above the cost price. If he allows a discount of 10%, find his gain percent.",
        options: ["8%", "10%", "12%", "15%"],
        correctOption: 0
      },
      {
        question: "A person sells an article at a profit of 20%. If he had bought it for 20% less and sold it for Rs. 55 less, he would have gained 25%. Find the cost price of the article.",
        options: ["Rs. 200", "Rs. 220", "Rs. 240", "Rs. 250"],
        correctOption: 1
      },
      {
        question: "A man sold an article at a loss of 20%. If he had sold it for Rs. 50 more, he would have gained 5%. Find the cost price of the article.",
        options: ["Rs. 250", "Rs. 300", "Rs. 350", "Rs. 400"],
        correctOption: 2
      },
      {
        question: "A man bought an article for Rs. 3600 and sold it at a gain of 15%. What is the selling price of the article?",
        options: ["Rs. 3960", "Rs. 4140", "Rs. 4200", "Rs. 4320"],
        correctOption: 3
      },
      {
        question: "A shopkeeper sells two fans for Rs. 840 each. On one, he gains 20% and on the other, he loses 20%. Find his gain or loss percent in the whole transaction.",
        options: ["4% gain", "4% loss", "8% gain", "8% loss"],
        correctOption: 1
      }
    ]
   
  // Add questions for other categories similarly
};

var currentQuestionIndex = 0;
var category = null;
var timerInterval = null;
var timeRemaining = 15; // Time in seconds
var totalTimeTaken = 0;
var totalQuestions = 0;
var attempts = 0;
var correctQuestions = 0;
var wrongQuestions = 0;
var score = 0;

function displayQuestion() {
  clearInterval(timerInterval); // Clear any existing timer
  timeRemaining = 15; // Reset time remaining
  startTimer(); // Start the timer for the next question

  var questionData = questionsData[category][currentQuestionIndex];
  var questionTextElement = document.getElementById("questionText");
  questionTextElement.textContent = questionData.question;

  var optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = ""; // Clear previous options

  questionData.options.forEach(function (option, index) {
    var optionElement = document.createElement("div");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", function () {
      checkAnswer(index);
    });
    optionsContainer.appendChild(optionElement);
  });

  var currentQuestionElement = document.getElementById("currentQuestion");
  currentQuestionElement.textContent = currentQuestionIndex + 1;

  // Remove previous event listener to prevent multiple event bindings
  var nextQuestionButton = document.getElementById("nextQuestionButton");
  nextQuestionButton.removeEventListener("click", handleClickNextQuestion);

  // Attach event listener to the next question button
  nextQuestionButton.addEventListener("click", handleClickNextQuestion);
}

function handleClickNextQuestion() {
  // Increment currentQuestionIndex to show the next question
  if (currentQuestionIndex < questionsData[category].length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    endQuiz(); // If it's the last question, end the quiz
  }
}



// Function to handle user selection and check answer
function checkAnswer(selectedOptionIndex) {
  var questionData = questionsData[category][currentQuestionIndex];
  var timeTaken = 15 - timeRemaining; // Calculate time taken for this question
  totalTimeTaken += timeTaken; // Add to the total time taken

  if (selectedOptionIndex === questionData.correctOption) {
    // Increase score if the selected option is correct
    correctQuestions++;
    score++;
    updateScore(score);
  } else {
    wrongQuestions++;
  }
  attempts++;
  // Proceed to the next question
  if (currentQuestionIndex < questionsData[category].length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to end the quiz and display summary
function endQuiz() {
  clearInterval(timerInterval); // Clear the timer

  // Calculate total questions
  totalQuestions = questionsData[category].length;

  // Calculate score percentage
  var scorePercentage = ((correctQuestions / totalQuestions) * 100).toFixed(2); // Calculate score percentage

  // Store result details in localStorage
  localStorage.setItem("participantName", "Your Name");
  localStorage.setItem("totalTimeTaken", totalTimeTaken);
  localStorage.setItem("totalQuestions", totalQuestions);
  localStorage.setItem("attempts", attempts);
  localStorage.setItem("correctQuestions", correctQuestions);
  localStorage.setItem("wrongQuestions", wrongQuestions);
  localStorage.setItem("scorePercentage", scorePercentage);

  // Redirect to the result page
  window.location.href = "result.html";
}

// Function to start the timer
function startTimer() {
  updateTime(timeRemaining); // Initial display of time
  timerInterval = setInterval(function () {
    timeRemaining--;
    updateTime(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      // Proceed to the next question when time is up
      if (currentQuestionIndex < questionsData[category].length - 1) {
        currentQuestionIndex++;
        displayQuestion();
      } else {
        endQuiz();
      }
    }
  }, 1000); // Update time every second
}

// Extract category from URL and display questions
window.onload = function () {
  var urlParams = new URLSearchParams(window.location.search);
  category = urlParams.get("category"); // Change this line
  if (category && questionsData.hasOwnProperty(category)) {
    updateCategoryHeading(category);
    displayQuestion();
    var totalQuestionsElement = document.getElementById("totalQuestions");
    totalQuestionsElement.textContent = questionsData[category].length;
  } else {
    alert("Invalid category selected.");
  }
};

// Function to update category heading
function updateCategoryHeading(category) {
  var categoryHeading = document.getElementById("categoryHeading");
  categoryHeading.textContent = category;
}

// Example functions to update time and score
function updateTime(time) {
  var timeElement = document.getElementById("time");
  timeElement.textContent = ` ${time}`;
}

function updateScore(score) {
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = `Score: ${score}`;
}

// Example usage
updateScore(0);
