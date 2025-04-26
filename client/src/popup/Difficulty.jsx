import React from "react";

const Difficulty = ({ onDifficultySelect, currentDifficulty }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <p className="text-gray-400 font-bold text-xl mb-4">POZIOM TRUDNOŚCI</p>
      <div className="flex gap-4 items-center justify-beetween text-xs font-bold">
        <button
          className={`px-3 py-2 rounded-2xl border-2 font-thin ${
            currentDifficulty === "easy"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg"
              : "border-rose-500 text-gray-300 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onDifficultySelect("easy")}
        >
          ŁATWY
        </button>
        <button
          className={`px-3 py-2 rounded-2xl border-2 font-thin ${
            currentDifficulty === "medium"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg"
              : "border-rose-500 text-gray-300 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onDifficultySelect("medium")}
        >
          ŚREDNI
        </button>
        <button
          className={`px-3 py-2 rounded-2xl border-2 font-thin ${
            currentDifficulty === "hard"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg"
              : "border-rose-500 text-gray-300 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onDifficultySelect("hard")}
        >
          TRUDNY
        </button>
      </div>
    </div>
  );
};

export default Difficulty;
