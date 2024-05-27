import React, { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const questions = [
  {
    category: "100 DKK",
    question: "W pilce noznej strzal w okienko to strzal:",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    category: "1000 DKK",
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
  },
  {
    category: "5000 DKK",
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
  },
];

export default function Index() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCategory, setShowCategory] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowCategory((prev) => !prev);
    if (!showCategory) {
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleNextQuestion();
      } else if (!showCategory && /[A-Da-d]/.test(event.key)) {
        const answerIndex = event.key.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
        handleAnswerSelect(answerIndex);
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentQuestionIndex, showCategory]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="border px-4 py-5 mb-3 border-grey bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-navy rounded-full text-center">
        <p className="text-2xl font-bold text-white">
          {showCategory ? currentQuestion.category : currentQuestion.question}
        </p>
      </div>
      {showCategory ? null : (
        <div className="flex flex-wrap">
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className={`font-bold border border-grey px-4 py-5 mb-3 rounded-full w-2/4 cursor-pointer ${
                selectedAnswer === index ? "bg-orange-400" : "bg-blue"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              <span className="font-bold text-yellow mr-2">{String.fromCharCode(65 + index)}:</span>{answer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
