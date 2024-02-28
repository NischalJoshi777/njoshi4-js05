"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Nischal Joshi
      Date:  02/28/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Declare the ID for timed commands
// and the node list for questions
// Elements in the quiz page
let timeID;
let questionList  = document.querySelectorAll("div#quiz input");


let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// adding and onclick event to startQuiz variable;
startQuiz.onclick = function(){
   overlay.className = "showquiz";
   timeID = setInterval(countdown,1000);
   
}

function countdown(){
   if(timeLeft === 0){
      window.clearInterval(timeID);

      let totalCorrect = checkAnswers();

      if(totalCorrect === correctAnswers.length){
         window.alert('Congratulations! You got 100 %.');
      } else {
         const incorrectAnswers = correctAnswers.length - totalCorrect;
         window.alert(`You answered ${incorrectAnswers} answers incorrectly out of ${correctAnswers.length} questions.`)
         //reseting the time
         timeLeft = quizTime;
         //setting the quick clock value
         quizClock.value = timeLeft;
         //hiding overaly 
         overlay.className = 'hidequiz';
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}







/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
