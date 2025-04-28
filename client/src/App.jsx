import React, { useState } from "react";
import Header from "./components/Header";
import QuizOptions from "./components/QuizOptions";
import StartButton from "./components/StartButton";
import QuizPopup from "./components/QuizPopup";
import Quiz from "./quiz/quiz";
import { sendParams } from "./api";
import Loading from "./components/Loading";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [quizParams, setQuizParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quizGeneration, setQuizGeneration] = useState(0);

  const onStartGeneration = async (
    numberOfQuestions,
    difficulty,
    topic,
    explanation
  ) => {
    setIsPopupOpen(false);
    setIsLoading(true);
    setQuizGeneration(quizGeneration + 1);

    setQuizParams({
      number: numberOfQuestions,
      level: difficulty,
      topic: topic,
      explanation: explanation,
    });

    const data = await sendParams(
      numberOfQuestions,
      difficulty,
      topic,
      explanation
    );
    setQuizData(data);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <>
      <Header />
      <QuizOptions />
      <StartButton onClick={() => setIsPopupOpen(true)} />
      <QuizPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onStartGeneration={onStartGeneration}
      />
      {quizData && (
        <Quiz
          quizData={quizData}
          testParams={quizParams}
          loadingComplete={isLoading}
          resetCounter={quizGeneration}
        />
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default App;
