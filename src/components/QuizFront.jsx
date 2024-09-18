import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon
import { useNavigate } from 'react-router-dom';

function QuizFront() {
  const rules = {
    "header": "Quizzes",
    "rulesHeader": "Quiz Rules",
    "rules": {
      "questionCount": "The section contains only 5 questions, each worth 1 mark.",
      "singleAnswer": "Each question has a single correct answer.",
      "answerAll": "You must answer all questions to complete the quiz.",
      "noNegativeMarking": "There is no negative marking for incorrect answers.",
      "timeLimit": "The quiz must be completed within the allocated time limit."
    },
    "startButton": "Start the Quiz"
  };

  const navigate = useNavigate();

  const startQuiz = () => {
    console.log('Quiz started!');
    navigate('/quiz/start');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {rules.header}
      </h1>
      <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {rules.rulesHeader}
        </h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>{rules.rules.questionCount}</li>
          <li>{rules.rules.singleAnswer}</li>
          <li>{rules.rules.answerAll}</li>
          <li>{rules.rules.noNegativeMarking}</li>
          <li>{rules.rules.timeLimit}</li>
        </ul>
      </section>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg flex items-center hover:bg-blue-600 transition duration-300"
        onClick={startQuiz}
      >
        {rules.startButton}
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default QuizFront;
