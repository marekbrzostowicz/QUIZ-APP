import React from "react";

const Topics = ({ currentTopic, onTopicSelect }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-gray-400 font-bold text-xl">TEMATYKA</p>
      <div className="flex gap-4 text-gray-300 text-xs font-bold">
        <button
          className={`border-2 rounded-2xl  px-3 py-2 font-thin ${
            currentTopic === "react"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg"
              : "border-rose-500 text-gray-400 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onTopicSelect("react")}
        >
          REACT
        </button>
        <button
          className={`border-2 rounded-2xl  px-3 py-2 font-thin  ${
            currentTopic === "python"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg font-bold"
              : "border-rose-500 text-gray-400 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onTopicSelect("python")}
        >
          PYTHON
        </button>
        <button
          className={`border-2 rounded-2xl  px-3 py-2 font-thin  ${
            currentTopic === "programming"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg font-bold"
              : "border-rose-500 text-gray-400 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onTopicSelect("programming")}
        >
          WIEDZA OGÓLNA
        </button>
        <button
          className={`border-2 rounded-2xl  px-3 py-2 font-thin ${
            currentTopic === "java-script"
              ? "bg-neutral-600 border-emerald-400 text-white scale-105 shadow-lg font-bold"
              : "border-rose-500 text-gray-400 hover:border-emerald-300 hover:bg-neutral-600"
          }`}
          onClick={() => onTopicSelect("java-script")}
        >
          JAVA SCRIPT
        </button>
      </div>
    </div>
  );
};

export default Topics;
