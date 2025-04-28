import React, { useState, useEffect, useRef } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BiUpArrowCircle } from "react-icons/bi";

const Quiz = ({ quizData, testParams, loadingComplete, resetCounter }) => {
  const [userSelection, setUserSelection] = useState({});
  const [dispalyExplanation, setDisplayExplanation] = useState(() => {
    let array = {};
    for (let i = 0; i < quizData.explanation.length; i++) {
      array[i] = false;
    }
    return array;
  });
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [countAnswers, setCountAnswers] = useState(0);

  const scrollDiv = useRef(null);

  useEffect(() => {
    if (countAnswers === testParams.number) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [countAnswers, testParams?.number]);

  useEffect(() => {
    scrollDiv.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [loadingComplete]);

  useEffect(() => {
    setUserSelection({});
    setDisplayExplanation({});
    setCorrectAnswers(0);
    setCountAnswers(0);
  }, [resetCounter]);

  if (
    !quizData ||
    !quizData.questions ||
    !quizData.options ||
    !quizData.answers
  ) {
    return <div className="text-red-500">Error</div>;
  }

  const handleClick = (e) => {
    const clickedButton = e.target.closest("button");
    // if (
    //   Object.prototype.hasOwnProperty.call(
    //     parseInt(clickedButton.dataset.question)
    //   ) ||
    //   !clickedButton
    // ) {
    //   return;
    // }
    if (
      userSelection.hasOwnProperty(
        parseInt(clickedButton.dataset.question) || !clickedButton
      )
    ) {
      return;
    }

    if (clickedButton) {
      setCountAnswers(countAnswers + 1);
      let answer = clickedButton.dataset.answer;
      let question = parseInt(clickedButton.dataset.question);
      console.log("QUESION================", question);
      setUserSelection((prevSelections) => ({
        ...prevSelections,
        [question]: answer,
      }));
      if (quizData.answers[question - 1] === answer) {
        setCorrectAnswers(correctAnswers + 1);
        // console.log("PRAWDA");
      } else {
        // console.log("FAŁSZ");
      }
    }
  };

  const handleExplanation = (index) => {
    console.log("=====", dispalyExplanation[index]);
    setDisplayExplanation((prevExplanations) => {
      const newExplanations = { ...prevExplanations };
      if (newExplanations[index] === true) {
        newExplanations[index] = false;
      } else {
        newExplanations[index] = true;
      }

      return newExplanations;
    });
  };

  const countPercentage = () => {
    return Math.floor((correctAnswers / testParams.number) * 100);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-8 p-4">
        <div
          className="flex items-center mb-10 gap-6 bg-cyloDarker p-4 rounded-2xl border-l-4 border-fuchsia-700 shadow-2xl"
          ref={scrollDiv}
        >
          <h2 className="text-2xl font-bold text-gray-400">Quiz</h2>
          <p className="text-gray-400 font-semibold">
            <span className="text-amber-500 font-normal">Temat: </span>
            {testParams.topic}
          </p>
          <p className="text-gray-400 font-semibold">
            <span className="text-teal-500 font-normal">Poziom:</span>{" "}
            {testParams.level}
          </p>
          <p className="text-gray-400 font-semibold">
            <span className="text-fuchsia-700 font-normal">Liczba pytań:</span>{" "}
            {testParams.number}
          </p>
        </div>
        {quizData.questions.map((question, index) => {
          let options = quizData.options[index];

          return (
            <>
              <div
                key={index}
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!
                className={`mb-10 p-10 bg-cyloDarker rounded-2xl shadow-2xl border-l-4 relative 
                ${
                  !userSelection.hasOwnProperty(index + 1)
                    ? "border-fuchsia-700"
                    : "border-neutral-600 opacity-70"
                }`}
              >
                <div className="absolute text-white bottom-4 right-4">
                  {userSelection.hasOwnProperty(index + 1) &&
                    (dispalyExplanation[index] === true ? (
                      <FaArrowUp
                        className="text-gray-400 hover:text-gray-100"
                        onClick={() => handleExplanation(index)}
                      />
                    ) : (
                      <FaArrowDown
                        className="text-gray-400 hover:text-gray-100"
                        onClick={() => handleExplanation(index)}
                      />
                    ))}
                </div>

                <p className="text-gray-400 font-thin text-xl mb-4">
                  <span className="text-xl font-bold text-pink-600">
                    {index + 1}.{" "}
                  </span>
                  {question}
                </p>

                {options && typeof options === "object" && (
                  <div
                    className="flex flex-col space-y-2 "
                    onClick={handleClick}
                  >
                    {Object.entries(options).map(([key, value]) => {
                      const isAnswered = Object.prototype.hasOwnProperty.call(
                        userSelection,
                        index + 1
                      );
                      const isThisOptionSelected =
                        isAnswered && userSelection[index + 1] === key;
                      const isAnswerCorrect =
                        isAnswered &&
                        userSelection[index + 1] === quizData.answers[index];

                      let borderColor = "";
                      if (isThisOptionSelected) {
                        if (isAnswerCorrect) {
                          borderColor = "border-b border-teal-500";
                        } else {
                          borderColor = "border-b border-pink-500";
                        }
                      }

                      return (
                        <button
                          className={`text-gray-300 mb-2 ml-4 p-2 rounded-2xl hover:bg-neutral-800 cursor-pointer text-left ${borderColor}`}
                          key={key}
                          data-answer={key}
                          data-question={index + 1}
                        >
                          <span className="text-amber-500 font-bold mr-2">
                            {key.toUpperCase()}.
                          </span>
                          {value}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              {dispalyExplanation[index] === true && (
                <div className="mb-10 bg-cyloDarker px-12 py-8 rounded-2xl text-gray-400 border-l-4 border-pink-600 leading-8">
                  {quizData.explanation[index]}
                </div>
              )}
            </>
          );
        })}
        <div className="flex items-center mb-10 gap-6 bg-cyloDarker p-4 rounded-2xl border-l-4 border-fuchsia-700 shadow-2xl justify-between">
          <div className="flex gap-6">
            <p className="text-xl font-bold text-gray-400">Wynik:</p>
            <p className="text-amber-500 text-xl">
              {countAnswers === testParams.number ? correctAnswers : "?"} /{" "}
              {testParams.number}
            </p>
            <p className="text-teal-500 text-xl">
              {countAnswers === testParams.number
                ? `${countPercentage(correctAnswers)} %`
                : "? %"}
            </p>
          </div>

          {countAnswers !== testParams.number && (
            <div className="text-gray-500">
              Udziel odpowiedzi na wszystkie pytania
            </div>
          )}
        </div>
        {countAnswers === testParams.number && (
          <div className="text-gray-500 my-12">
            <BiUpArrowCircle
              size={55}
              className="transition ease-in-out duration-300 hover:-translate-y-3 hover:text-gray-300"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
