import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Topics from "../popup/Topics";
import Difficulty from "../popup/Difficulty";

const QuizPopup = ({ isOpen, onClose, onStartGeneration }) => {
  const [numberOfQuestion, setNumberOfQuestions] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const [error, setError] = useState(false);
  useEffect(() => {
    setNumberOfQuestions(1);
    setSelectedTopic("");
    setSelectedDifficulty("");
  }, [onStartGeneration]);

  if (!isOpen) return null;

  const handleDifficultSelect = (difficultyValue) => {
    setSelectedDifficulty(difficultyValue);
  };

  const handleTopicSelect = (topicValue) => {
    setSelectedTopic(topicValue);
  };

  const handleGenerate = async () => {
    if (selectedTopic === "" || selectedDifficulty === "") {
      setError(true);
    } else {
      console.log("wysylanie");
      onStartGeneration(numberOfQuestion, selectedDifficulty, selectedTopic);

      setError(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="text-white bg-cyloDark flex flex-col items-center p-8 rounded-2xl border-2 border-gray-600 relative">
        <button
          className="absolute top-3 right-3 hover:text-gray-600"
          onClick={onClose}
        >
          <FaTimes className="text-gray-400 hover:text-red-400" />
        </button>
        <div className="flex flex-col items-center mb-6">
          <p className="text-gray-400 font-bold text-xl mb-4">LICZBA PYTAŃ</p>

          <input
            className="bg-neutral-700 text-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-24 text-center"
            type="number"
            min="1"
            max="20"
            value={numberOfQuestion}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
          ></input>
        </div>
        <Topics
          onTopicSelect={handleTopicSelect}
          currentTopic={selectedTopic}
        />
        <Difficulty
          onDifficultySelect={handleDifficultSelect}
          currentDifficulty={selectedDifficulty}
        />
        <button
          className="mt-12 border-2 border-neutral-300 px-4 py-2 rounded-2xl text-xl font-bold text-gray-400 hover:border-emerald-500 hover:bg-neutral-500 hover:text-white duration-300"
          onClick={handleGenerate}
        >
          GENERUJ
        </button>
        {error && (
          <p className="text-red-500 mt-4">Wybierz wszyskie parametry</p>
        )}
      </div>
    </div>
  );
};

export default QuizPopup;
