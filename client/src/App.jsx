import React, { useState } from "react";
import Header from "./components/Header";
import QuizOptions from "./components/QuizOptions";
import StartButton from "./components/StartButton";
import QuizPopup from "./components/QuizPopup";
import Quiz from "./quiz/quiz";
import { sendParams } from "./api";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [quizParams, setQuizParams] = useState(null);

  const onStartGeneration = async (numberOfQuestions, difficulty, topic) => {
    setIsPopupOpen(false);

    setQuizParams({
      number: numberOfQuestions,
      level: difficulty,
      topic: topic,
    });

    const data = await sendParams(numberOfQuestions, difficulty, topic);
    setQuizData(data);
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
      {quizData && <Quiz quizData={quizData} testParams={quizParams} />}

      {/* <button onClick={() => console.log(quizData)}>dfvdfvdfvd</button> */}
      {/* {quizData && (
        <div>
          <div className="text-white">{quizData.questions[0]}</div>
          <div className="text-white">{quizData.questions.length}</div>
        </div>
      )} */}
    </>
  );
};

export default App;
