import React, { useState } from 'react';
    import confetti from 'canvas-confetti';

    const quizData = [
      {
        question: "What is the prefix for 10^18?",
        options: ["peta", "exa", "tera", "giga"],
        answer: "exa",
      },
      {
        question: "What is the prefix for 10^15?",
        options: ["peta", "exa", "tera", "giga"],
        answer: "peta",
      },
      {
        question: "What is the prefix for 10^12?",
        options: ["peta", "exa", "tera", "giga"],
        answer: "tera",
      },
      {
        question: "What is the prefix for 10^9?",
        options: ["peta", "exa", "tera", "giga"],
        answer: "giga",
      },
      {
        question: "What is the prefix for 10^6?",
        options: ["mega", "kilo", "hecto", "deca"],
        answer: "mega",
      },
      {
        question: "What is the prefix for 10^3?",
        options: ["mega", "kilo", "hecto", "deca"],
        answer: "kilo",
      },
        {
        question: "What is the prefix for 10^2?",
        options: ["mega", "kilo", "hecto", "deca"],
        answer: "hecto",
      },
      {
        question: "What is the prefix for 10^1?",
        options: ["mega", "kilo", "hecto", "deca"],
        answer: "deca",
      },
      {
        question: "What is the prefix for 10^-1?",
        options: ["deci", "centi", "milli", "micro"],
        answer: "deci",
      },
      {
        question: "What is the prefix for 10^-2?",
         options: ["deci", "centi", "milli", "micro"],
        answer: "centi",
      },
      {
        question: "What is the prefix for 10^-3?",
        options: ["deci", "centi", "milli", "micro"],
        answer: "milli",
      },
       {
        question: "What is the prefix for 10^-6?",
        options: ["deci", "centi", "milli", "micro"],
        answer: "micro",
      },
      {
        question: "What is the prefix for 10^-9?",
        options: ["nano", "pico", "femto", "atto"],
        answer: "nano",
      },
      {
        question: "What is the prefix for 10^-12?",
        options: ["nano", "pico", "femto", "atto"],
        answer: "pico",
      },
      {
        question: "What is the prefix for 10^-15?",
        options: ["nano", "pico", "femto", "atto"],
        answer: "femto",
      },
      {
        question: "What is the prefix for 10^-18?",
        options: ["nano", "pico", "femto", "atto"],
        answer: "atto",
      },
    ];

    function App() {
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResult, setShowResult] = useState(false);
      const [feedback, setFeedback] = useState('');

      const handleAnswer = (selectedOption) => {
        if (selectedOption === quizData[currentQuestion].answer) {
          setScore(score + 1);
          setFeedback('');
          confetti({
            particleCount: 200,
            spread: 160,
            origin: { y: 0.7 },
          });
        } else {
          setFeedback(`Incorrect! The correct answer is ${quizData[currentQuestion].answer}`);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowResult(true);
        }
      };

      const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setFeedback('');
      };

      return (
        <div className="quiz-container">
          {showResult ? (
            <div className="result">
              <h2>
                You scored {score} out of {quizData.length}
              </h2>
              <button onClick={resetQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <>
              <div className="question">
                {currentQuestion + 1}. {quizData[currentQuestion].question}
              </div>
              <div className="options">
                {quizData[currentQuestion].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
              {feedback && <p className={feedback.startsWith('Incorrect') ? 'incorrect-answer' : 'correct-answer'}>{feedback}</p>}
            </>
          )}
        </div>
      );
    }

    export default App;
