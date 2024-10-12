const questions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      {text: "Jupiter", correct: true},
      {text: "Mars", correct: false},
      {text: "Venus", correct: false},
      {text: "Earth", correct: false}
    ]
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      {text: "Ronald dahl", correct: false},
      {text: "William Shakespeare", correct: true},
      {text: "Rudyard kipling", correct: false},
      {text: "Evelyn Hugo", correct: false}
    ]
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      {text: "5", correct: false},
      {text: "6", correct: false},
      {text: "7", correct: true},
      {text: "3", correct: false}
    ]
  }  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
 }

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer=>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
 }

 function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
 }

 function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display="block";
 }

 function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
 }

 function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
 }

 nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
 })

 startQuiz();