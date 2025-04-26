import React, { useState, useEffect } from "react";

const Quiz = ({ quizData, testParams }) => {
  const [userSelection, setUserSelection] = useState({});

  useEffect(() => {
    console.log(userSelection);
  }, [userSelection]);

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

    quizData.answers;

    if (clickedButton) {
      let answer = clickedButton.dataset.answer;
      let question = parseInt(clickedButton.dataset.question);
      //   console.log("ANSWER", answer);
      //   console.log("QUESION", question);
      setUserSelection((prevSelections) => ({
        ...prevSelections,
        [question]: answer,
      }));
      //   console.log(userSelection);
      if (quizData.answers[question - 1] === answer) {
        // console.log("PRAWDA");
      } else {
        // console.log("FAŁSZ");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <div className="flex items-center mb-10 gap-6 bg-cyloDarker p-4 rounded-2xl border-l-4 border-fuchsia-700 shadow-2xl">
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
          <div
            key={index}
            className="mb-12 p-10 bg-cyloDarker rounded-2xl shadow-2xl border-l-4 border-fuchsia-700"
          >
            <p className="text-gray-400 font-thin text-xl mb-4">
              <span className="text-xl font-bold text-pink-600">
                {index + 1}.{" "}
              </span>
              {question}
            </p>

            {options && typeof options === "object" && (
              <div className="flex flex-col space-y-2" onClick={handleClick}>
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
                      className={`text-gray-300 mb-2 ml-4 p-2 rounded-2xl hover:bg-neutral-700 cursor-pointer text-left ${borderColor}`}
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
        );
      })}
    </div>
  );
};

export default Quiz;
